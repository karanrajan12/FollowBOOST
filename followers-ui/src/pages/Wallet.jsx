import { useEffect, useState } from "react";

import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

function Wallet() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const response = await fetch(
                    "https://followboost.onrender.com/api/user/profile",
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

                    setUser(data.user);

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchProfile();

    }, []);

    return (

        <div className="bg-black min-h-screen text-white">

            <TopHeader />

            <div className="p-4 pb-24">

                <h1 className="text-3xl font-bold mb-6">
                    Coins
                </h1>

                {/* Coin Card */}

                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl p-6 shadow-xl">

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-black/70 font-medium">
                                Available Coins
                            </p>

                            <h2 className="text-5xl font-bold text-black mt-2">
                                {user?.coins || 0}
                            </h2>

                        </div>

                        <div className="w-20 h-20 rounded-full bg-yellow-300 flex items-center justify-center shadow-lg">

                            <span className="text-4xl">
                                🪙
                            </span>

                        </div>

                    </div>

                </div>

                {/* Actions */}

                <div className="grid grid-cols-2 gap-4 mt-6">

                    <button
                        className="bg-yellow-600 hover:bg-yellow-700 transition p-4 rounded-2xl font-semibold"
                    >
                        Buy Coins
                    </button>

                    <button
                        className="bg-purple-600 hover:bg-purple-700 transition p-4 rounded-2xl font-semibold"
                    >
                        Earn Coins
                    </button>

                </div>

                {/* Coin Information */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mt-6">

                    <h2 className="text-xl font-bold mb-4">
                        Coin Information
                    </h2>

                    <div className="space-y-3">

                        <div className="flex justify-between">

                            <span className="text-zinc-400">
                                Username
                            </span>

                            <span>
                                {user?.userName}
                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span className="text-zinc-400">
                                Email
                            </span>

                            <span>
                                {user?.email}
                            </span>

                        </div>

                        <div className="flex justify-between">

                            <span className="text-zinc-400">
                                Total Coins
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 {user?.coins || 0}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Coin Packages */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mt-6">

                    <h2 className="text-xl font-bold mb-4">
                        Coin Packages
                    </h2>

                    <div className="space-y-3">

                        <div className="bg-black rounded-xl p-4 flex justify-between">

                            <span>
                                100 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 100
                            </span>

                        </div>

                        <div className="bg-black rounded-xl p-4 flex justify-between">

                            <span>
                                250 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 250
                            </span>

                        </div>

                        <div className="bg-black rounded-xl p-4 flex justify-between">

                            <span>
                                500 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 500
                            </span>

                        </div>

                        <div className="bg-black rounded-xl p-4 flex justify-between">

                            <span>
                                1000 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 1000
                            </span>

                        </div>

                    </div>

                </div>

                {/* Transactions */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mt-6">

                    <h2 className="text-xl font-bold mb-4">
                        Coin History
                    </h2>

                    <div className="text-center text-zinc-500 py-8">

                        No Coin Transactions Yet

                    </div>

                </div>

            </div>

            <BottomNav />

        </div>

    );

}

export default Wallet;
