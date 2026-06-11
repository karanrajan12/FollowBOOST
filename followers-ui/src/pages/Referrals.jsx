import { useEffect, useState } from "react";

import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

function Referrals() {

    const [referralCode, setReferralCode] =
        useState("");

    const [referrals, setReferrals] =
        useState(0);

    const [message, setMessage] =
        useState("");

    useEffect(() => {

        const fetchReferralData =
            async () => {

                try {

                    const token =
                        localStorage.getItem(
                            "token"
                        );

                    const response =
                        await fetch(
                            "https://followboost.onrender.com/api/referral/my-code",
                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${token}`
                                }
                            }
                        );

                    const data =
                        await response.json();

                    if (data.success) {

                        setReferralCode(
                            data.referralCode
                        );

                        setReferrals(
                            data.referrals
                        );

                    }

                } catch (error) {

                    console.log(error);

                }

            };

        fetchReferralData();

    }, []);

    const copyCode = () => {

        navigator.clipboard.writeText(
            referralCode
        );

        setMessage(
            "✅ Referral Code Copied"
        );

        setTimeout(() => {
            setMessage("");
        }, 2500);

    };

    return (
        <div className="bg-black min-h-screen text-white">

            <TopHeader />

            <div className="p-4 pb-24">

                <h1 className="text-3xl font-bold mb-6">
                    Referrals
                </h1>

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6">

                    <p className="text-sm opacity-80">
                        Your Referral Code
                    </p>

                    <h2 className="text-4xl font-bold mt-3">
                        {referralCode}
                    </h2>

                    <button
                        onClick={copyCode}
                        className="mt-5 bg-black/30 px-5 py-3 rounded-xl"
                    >
                        Copy Code
                    </button>

                </div>

                {
                    message && (
                        <div className="mt-4 bg-green-500/10 border border-green-500 text-green-400 rounded-xl p-4">
                            {message}
                        </div>
                    )
                }

                <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                        <p className="text-zinc-400">
                            Total Referrals
                        </p>

                        <h2 className="text-3xl font-bold mt-2">
                            {referrals}
                        </h2>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                        <p className="text-zinc-400">
                            Rewards Earned
                        </p>

                        <h2 className="text-3xl font-bold mt-2 text-green-400">
                            ₹{referrals * 10}
                        </h2>

                    </div>

                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mt-6">

                    <h2 className="text-xl font-bold mb-4">
                        How It Works
                    </h2>

                    <div className="space-y-3 text-zinc-400">

                        <p>
                            1. Share your referral code.
                        </p>

                        <p>
                            2. Friend creates an account.
                        </p>

                        <p>
                            3. Friend enters your code.
                        </p>

                        <p>
                            4. You earn ₹10 reward.
                        </p>

                    </div>

                </div>

            </div>

            <BottomNav />

        </div>
    );
}

export default Referrals;
