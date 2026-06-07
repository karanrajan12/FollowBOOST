import User from "../models/User.js";

export const getProfile = async (req, res) => {
    try {

        console.log("req.user:");
        console.log(req.user);

        const user = await User.findById(
            req.user.id
        ).select("-password");

        console.log("Found User:");
        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        return res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
};