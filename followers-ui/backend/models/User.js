import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },

        wallet: {
            type: Number,
            default: 0
        },

        followers: {
            type: Number,
            default: 0
        },

        orders: {
            type: Number,
            default: 0
        },

        freeClaimUsed: {
            type: Boolean,
            default: false
        },

        referralCode: {
            type: String,
            unique: true
        },

        referredBy: {
            type: String,
            default: null
        },

        referrals: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "User",
    userSchema
);