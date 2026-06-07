import express from "express";
import cors from "cors";
import freeClaimRoutes from "./routes/freeClaim.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import orderRoutes from "./routes/order.routes.js";
import referralRoutes from "./routes/referral.routes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "FollowBoost API Running"
    });
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);
app.use(
    "/api/free-claim",
    freeClaimRoutes
);
app.use(
    "/api/referral",
    referralRoutes
);
export default app;