import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { FriendRequest } from "../models/friendRequest.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";

const sendRequest = asyncHandler(async(req,res)=>{
    const from = req.user._id; // Extract the user ID from the token
    const { to } = req.body;

    // Validate request data
    if (!to) {
        throw new ApiError(400, "Recipient user ID ('to') is required.");
    }

    // Check if the recipient user exists
    const toUser = await User.findById(to);
    if (!toUser) {
        throw new ApiError(404, "Recipient user not found.");
    }

    // Check if a friend request already exists
    const existingRequest = await FriendRequest.findOne({ from, to });
    if (existingRequest) {
        throw new ApiError(400, "Friend request already sent.");
    }

    // Create and save new friend request
    const newRequest = new FriendRequest({ from, to });
    await newRequest.save();

    return res.status(200).json(
        new ApiResponse(200, newRequest, "Friend request sent successfully.")
    );
})

const getRequest = asyncHandler(async(req,res)=>{
    const userId = req.user._id;
    const request = await FriendRequest.find({ to: userId }).populate('from')

    if(request.length === 0){
        throw new ApiError(404,"No request not found");
    }

    return res.status(200).json(
        new ApiResponse(200,request,"Request get successfully.")
    )
})

const updateRequest = asyncHandler(async (req, res) => {
    const { requestId, status } = req.body;
    
    // Validate status
    const validStatuses = ['pending', 'accepted', 'declined'];
    if (!validStatuses.includes(status)) {
        throw new ApiError(400, "Invalid status value.");
    }

    const request = await FriendRequest.findById(requestId);
    
    if (!request) {
        throw new ApiError(404, "Friend request not found.");
    }

    request.status = status;
    await request.save();

    return res.status(200).json(
        new ApiResponse(200, request, "Friend request status updated successfully.")
    );
});
export{
    sendRequest,
    getRequest,
    updateRequest
}