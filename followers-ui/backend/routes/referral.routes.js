import express from "express";

import authMiddleware
    from "../middleware/auth.middleware.js";

import {
    getMyReferralCode,
    useReferralCode
}
    from "../controllers/referral.controller.js";

const router = express.Router();

router.get(
    "/my-code",
    authMiddleware,
    getMyReferralCode
);

router.post(
    "/use-code",
    authMiddleware,
    useReferralCode
);

export default router;