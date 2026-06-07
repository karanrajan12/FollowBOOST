import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null
        },

        instagramUsername: {
            type: String,
            required: true,
            trim: true
        },

        packageSelected: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "Processing",
                "Completed",
                "Failed"
            ],
            default: "Pending"
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Order",
    orderSchema
);