import mongoose from "mongoose";

const walletTransactionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        amount: {
            type: Number,
            required: true
        },

        type: {
            type: String,
            enum: [
                "CREDIT",
                "DEBIT"
            ],
            required: true
        },

        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "WalletTransaction",
    walletTransactionSchema
);