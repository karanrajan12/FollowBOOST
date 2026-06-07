import User from "../models/User.js";

export const getMyReferralCode = async (req, res) => {
    try {

        const user = await User.findById(
            req.user.id
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            referralCode: user.referralCode,
            referrals: user.referrals
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

export const useReferralCode = async (
    req,
    res
) => {
    try {

        const { referralCode } = req.body;

        const currentUser =
            await User.findById(req.user.id);

        if (!currentUser) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        if (currentUser.referredBy) {
            return res.status(400).json({
                success: false,
                message:
                    "Referral Code Already Used"
            });
        }

        const referrer =
            await User.findOne({
                referralCode
            });

        if (!referrer) {
            return res.status(404).json({
                success: false,
                message:
                    "Invalid Referral Code"
            });
        }

        if (
            referrer._id.toString() ===
            currentUser._id.toString()
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Cannot Use Your Own Code"
            });
        }

        referrer.referrals += 1;
        referrer.wallet += 10;

        currentUser.referredBy =
            referralCode;

        await referrer.save();
        await currentUser.save();

        return res.status(200).json({
            success: true,
            message:
                "Referral Applied Successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};