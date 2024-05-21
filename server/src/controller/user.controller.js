import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import  Jwt  from "jsonwebtoken";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import randomstring from "randomstring";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { updateFormFieldsContactInformation } from "./form.controller.js";

const generateAccessAndRefreshToken = async(userId)=>{
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})
        return {accessToken,refreshToken}
        
    } catch (error) {
        throw new ApiError(500,"Something went wrong while generating refresh and access token");
    }
}

const sendVerificationEmail = async(firstName,email,userId)=>{
    try {
        const transporter = nodemailer.createTransport({
                host:"smtp.gmail.com",
                port:587,
                secure:false,
                requireTLS:true,
                auth:{
                    user:process.env.APP_EMAIL ,
                    pass:process.env.APP_PASSWORD
                }
            })

            const mailOptions = {
                        from:process.env.APP_EMAIL,
                        to:email,
                        subject:"Verify your email address",
                        html:`<p>Hi ${firstName}, please click here to <a href="http://localhost:5173/verify-email/${userId}">verify</a> your mail.</p>`
                    }
                    transporter.sendMail(mailOptions,function(error,info){
                        if(error){
                            console.log(error);
                        }else{
                            console.log("Email has been send:",info.response);
                        }
                    })
    } catch (error) {
        console.log(error.message);
    }
}

const sendVerificationEmailForPassword = async(firstName,email,token)=>{
    try {
        const transporter = nodemailer.createTransport({
                host:"smtp.gmail.com",
                port:587,
                secure:false,
                requireTLS:true,
                auth:{
                    user:process.env.APP_EMAIL ,
                    pass:process.env.APP_PASSWORD
                }
            })

            const mailOptions = {
                        from:process.env.APP_EMAIL,
                        to:email,
                        subject:"For reset password",
                        html:`<p>Hi ${firstName}, please click here to <a href="http://localhost:5173/reset-password/${token}"> Reset</a> your password.</p>`
                    }
                    transporter.sendMail(mailOptions,function(error,info){
                        if(error){
                            console.log(error);
                        }else{
                            console.log("Email has been send:",info.response);
                        }
                    })
    } catch (error) {
        console.log(error.message);
    }
}

const registerUser = asyncHandler(async(req,res)=>{

    const {firstName,lastName,email,password} =req.body
    // const isAdmin = req.body.isAdmin || 0
    if(
        [firstName,lastName,email,password].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }

    const existedUser = await User.findOne(
        {email}
        )
        
        if(existedUser){
            throw new ApiError(409,"User with email already exists")
        }

        // check for avatar
        let avatarLocalPath = req.files?.avatar[0]?.path
        
        //upload them to cloudinary
        const avatar = await uploadOnCloudinary(avatarLocalPath)


        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            avatar:avatar?.url,
            isAdmin:0
        })
        console.log(user);

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )
        console.log(createdUser);
        await sendVerificationEmail(req.body.firstName,req.body.email,createdUser._id);

        if(!createdUser){
            throw new ApiError(500,"Something went wrong while registering the user")
        }

        return res.status(201).json(
            new ApiResponse(200,createdUser,"User register successfully, please verify your email.")
        )
})

const verifyEmail = asyncHandler(async(req,res)=>{
    // const userId = req.query.id;
    const userId = req.params.userId;

    if (!userId) {
        throw new ApiError(400, "User ID is missing");
    }

    const user = await User.findById(userId);

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    if (user.isVerified) {
        // User is already verified
        return res.status(200).json(new ApiResponse(200, {}, "User is already verified"));
    }

    user.isVerified = 1;
    await user.save();

    res.status(200).json(new ApiResponse(200, {}, "Email verified successfully"));
});

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;

    if(!email){
        throw new ApiError(400,"email is required")
    }

    const user = await User.findOne({
        email
    })

    if(!user){
        throw new ApiError(404,"user does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(401,"email or password is incorrect");
    }

    if(user.isVerified !== 1){
        throw new ApiError(401,"user email is not verified");
    }

    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly:true,
        secure:true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
            "User logged in successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req,res)=>{
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1
            }
        },
        {
            new:true
        }
    )
    const options = {
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{},"User logged out")
    )
})

const changePassword = asyncHandler(async(req,res)=>{
    const {oldPassword,newPassword} = req.body;

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect){
        throw new ApiError(400,"Invalid old password")
    }

    user.password = newPassword
    await user.save({validateBeforeSave:false})

    return res
    .status(200)
    .json(
        new ApiResponse(200,{},"Password change successfully")
    )
})

const viewProfile = asyncHandler(async(req,res)=>{
    const userId = req.user._id
    const profile = await User.findById(userId)

    return res
    .status(201)
    .json(
        new ApiResponse(200,profile,"User profile view successfully.")
    )
})

const loginAdmin = asyncHandler(async(req,res)=>{
    const{email,password} = req.body;
    if(!email){
        throw new ApiError(400,"email is required");
    }
    const user = await User.findOne({email});

    if(!user){
        throw new ApiError(400,"user not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);
    
    if(!isPasswordValid){
        throw new ApiError(400,"email or password is not correct");
    }

    if(user.isAdmin !== 1){
        throw new ApiError(400," not a admin");
    }

    const {accessToken,refreshToken} = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly:true,
        secure:true
    }

    return res
    .status(201)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
            "Admin logged in successfully"
        )
    )
})

const logoutAdmin = asyncHandler(async(req,res)=>{
    if(req.user.isAdmin !== 1){
        throw new ApiError(403,"Not an admin");
    }

    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset:{
                refreshToken:1
            }
        },
        {
            new: true
        }
    );

    const options ={
        httpOnly:true,
        secure:true
    };
    return res
    .status(201)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(200,{},"Admin logged out")
    )
})

const forgetPasswordEmail = asyncHandler(async(req,res)=>{
    const email = req.body.email;
    const userData = await User.findOne({email})

    if(userData.isVerified === 0){
        throw new ApiError(404,"please verify your email")
    }else{
        const randomString = randomstring.generate();
        await User.updateOne({email},{$set:{token:randomString}});
        sendVerificationEmailForPassword(userData.firstName,userData.email,randomString)
    }

    console.log(`token:${userData.token}`);
    if(!userData){
       throw new ApiError(404,"user email is incorrect")
    }

    return res
    .status(201)
    .json(
        new ApiResponse(200,userData,"Please check your email to reset password")
    )
})


const resetPassword = asyncHandler(async(req,res)=>{
    const token = req.params.token;
    const password = req.body.password;
    const userData = await User.findOne({token});
    if(!userData){
        throw new ApiError(400,"Invalid token")
    }

    // const securePassword = await userData.isPasswordCorrect(password);
    userData.password = password
    userData.token = ''
    await userData.save({validateBeforeSave:false});
     console.log(`new password:${userData.password}`);
    return res
    .status(201)
    .json(
        new ApiResponse(200,{},"password reset successfully")
    )
})
export{
    registerUser,
    verifyEmail,
    loginUser,
    logoutUser,
    changePassword,
    loginAdmin,
    logoutAdmin,
    forgetPasswordEmail,
    resetPassword,
    viewProfile
}