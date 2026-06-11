import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
    try {

        const {
            instagramUsername,
            password,
            packageSelected
        } = req.body;

        const order = await Order.create({
            userId: req.user?.id || null,
            instagramUsername,
            password,
            packageSelected
        });

        return res.status(201).json({
            success: true,
            message: "Order Created Successfully",
            order
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const getMyOrders = async (req, res) => {
    try {

        const orders = await Order.find({
            userId: req.user.id
        }).sort({
            createdAt: -1
        });

        return res.status(200).json({
            success: true,
            orders
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const getAllOrders = async (req, res) => {
    try {

        const orders = await Order.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            orders
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};
