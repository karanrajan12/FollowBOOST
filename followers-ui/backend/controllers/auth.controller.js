import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {

        const {
            userName,
            email,
            password
        } = req.body;

        const existingUser = await User.findOne({
            $or: [
                { email },
                { userName }
            ]
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const referralCode =
            userName.toUpperCase() +
            Math.floor(
                1000 + Math.random() * 9000
            );

        const user = await User.create({
            userName,
            email,
            password,
            referralCode
        });

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            token,
            user: {
                _id: user._id,
                userName: user.userName,
                email: user.email,
                wallet: user.wallet,
                followers: user.followers,
                orders: user.orders,
                referrals: user.referrals,
                referralCode: user.referralCode
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const login = async (req, res) => {
    try {

        const {
            email,
            password
        } = req.body;

        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        if (password !== user.password) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.status(200).json({
            success: true,
            token,
            user: {
                _id: user._id,
                userName: user.userName,
                email: user.email,
                wallet: user.wallet,
                followers: user.followers,
                orders: user.orders,
                referrals: user.referrals,
                referralCode: user.referralCode
            }
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};