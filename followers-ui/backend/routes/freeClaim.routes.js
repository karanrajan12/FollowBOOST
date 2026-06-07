import express from "express";

import authMiddleware from "../middleware/auth.middleware.js";

import {
    claimFreeFollowers
} from "../controllers/freeClaim.controller.js";

const router = express.Router();

router.post(
    "/claim",
    authMiddleware,
    claimFreeFollowers
);

export default router;