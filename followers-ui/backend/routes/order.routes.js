import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {
    createOrder,
    getMyOrders,
    getAllOrders
} from "../controllers/order.controller.js";

const router = express.Router();

router.post(
    "/create",
    createOrder
);

router.get(
    "/my-orders",
    authMiddleware,
    getMyOrders
);

router.get(
    "/all",
    authMiddleware,
    getAllOrders
);

export default router;