import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import  Jwt  from "jsonwebtoken";
import mongoose from "mongoose";
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

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            isAdmin:0
        })
        console.log(user);

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        )

        if(!createdUser){
            throw new ApiError(500,"Something went wrong while registering the user")
        }

        return res.status(201).json(
            new ApiResponse(200,createdUser,"User register successfully, please verify your email.")
        )
    })

export{
    registerUser,
}