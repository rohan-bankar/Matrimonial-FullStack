import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Form } from "../models/form.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const viewProfile = asyncHandler(async(req,res)=>{

    if (req.user.isAdmin !== 1) {
        throw new ApiError(403, "Forbidden: Not an admin");
    }

    const profiles = await Form.find({});

    return res
    .status(201)
    .json(
        new ApiResponse(200,profiles,"User profile retrieved successfully")
    )
})

const deleteUserProfile = asyncHandler(async(req,res)=>{

    if (req.user.isAdmin !== 1) {
        throw new ApiError(403, "Forbidden: Not an admin");
    }

    const userId = req.params.userId.trim();

    const user = await User.findById(userId);
    if(!user){
        throw new ApiError(404,"user not found");
    }

    // await Form.findByIdAndDelete({userId});

    await User.findByIdAndDelete(userId);

    return res
    .status(201)
    .json(
        new ApiResponse(200,{},"User data deleted successfully")
    );
    
})

const deleteUserData = asyncHandler(async(req,res)=>{
    if(req.user.isAdmin !== 1){
        throw new ApiError(403,"Forbidden: Not an admin")
    }

    const userId = req.params.userId.trim();

    const user = await Form.findById(userId);
    if(!user){
        throw new ApiError(404,"user not found");
    }

    await Form.findByIdAndDelete(userId);

    return res
    .status(201)
    .json(
        new ApiResponse(200,{},"User data deleted successfully")
    );
});



export{
    viewProfile,
    deleteUserProfile,
    deleteUserData
}