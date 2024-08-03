import mongoose, { Schema } from "mongoose";
const friendRequestSchema = new Schema(
    {
        from:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        to:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        status:{
            type:String,
            enum:['pending','accepted','declined'],
            default:'pending'
        }
    },
    {
        timestamps:true
    }
)

export const FriendRequest = mongoose.model("FriendRequest",friendRequestSchema);