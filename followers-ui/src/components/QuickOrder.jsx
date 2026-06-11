import { useState, useEffect } from "react";

function QuickOrder() {

    const [instagramUsername, setInstagramUsername] = useState("");
    const [password, setPassword] = useState("");
    const [packageSelected, setPackageSelected] = useState(
        "🎁 100 Followers - FREE"
    );

    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(30);
    const [progress, setProgress] = useState(0);

    const [success, setSuccess] = useState(false);

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    useEffect(() => {

        let timer;

        if (loading && countdown > 0) {

            timer = setInterval(() => {

                setCountdown((prev) => prev - 1);

                setProgress((prev) => {

                    const next =
                        prev + (100 / 30);

                    return next > 100
                        ? 100
                        : next;

                });

            }, 1000);

        }

        if (loading && countdown === 0) {

            setLoading(false);

            setSuccess(true);

            setMessage(
                `🎉 ${packageSelected} Delivered Successfully!`
            );

            setMessageType("success");

        }

        return () => clearInterval(timer);

    }, [loading, countdown]);



    const handleSubmit = async () => {

        try {

            setMessage("");
            setProgress(0);

            if (!instagramUsername) {

                setMessage(
                    "⚠️ Please enter Instagram Username"
                );

                setMessageType("warning");

                return;

            }

            const response = await fetch(
                "https://followboost.onrender.com/api/order/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        instagramUsername,
                        packageSelected
                    })
                }
            );

            const data =
                await response.json();

            if (!data.success) {

                setMessage(
                    data.message
                );

                setMessageType("error");

                return;

            }

            setSuccess(false);

            setCountdown(30);

            setLoading(true);

        } catch (error) {

            console.log(error);

            setMessage(
                "Failed to create order"
            );

            setMessageType("error");

        }

    };

    if (loading) {

        return (

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

                <h2 className="text-2xl font-bold text-center text-white">
                    Delivering Followers 🪙
                </h2>

                <p className="text-center text-gray-400 mt-2">
                    Processing your order...
                </p>

                <div className="mt-8">

                    <div className="flex justify-between mb-2">

                        <span className="text-zinc-400">
                            Progress
                        </span>

                        <span className="text-purple-400 font-bold">
                            {Math.floor(progress)}%
                        </span>

                    </div>

                    <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">

                        <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 transition-all duration-1000"
                            style={{
                                width: `${progress}%`
                            }}
                        />

                    </div>

                </div>

                <div className="mt-8 text-center">

                    <h1 className="text-6xl font-bold text-purple-500">
                        {Math.floor(progress)}
                    </h1>

                    <p className="text-zinc-400 mt-2">
                        Followers Sent
                    </p>

                    <p className="text-white text-2xl font-semibold">
                        {Math.floor(progress)} / 100
                    </p>

                </div>

                <div className="mt-8">

                    <div className="flex justify-between text-sm text-zinc-400 mb-2">
                        <span>Starting</span>
                        <span>Delivering</span>
                        <span>Completed</span>
                    </div>

                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">

                        <div
                            className="h-2 bg-green-500 transition-all duration-1000"
                            style={{
                                width: `${progress}%`
                            }}
                        />

                    </div>

                </div>

                <div className="mt-8 bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">

                    <p className="text-purple-300 text-sm">
                        Please do not close this page while
                        followers are being delivered.
                    </p>

                </div>

            </div>

        );

    }

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

            <h2 className="text-xl font-bold mb-5">
                Quick Order
            </h2>

            {
                message && (
                    <div
                        className={`mb-5 p-4 rounded-xl border ${
                            messageType === "success"
                                ? "bg-green-500/10 border-green-500 text-green-400"
                                : messageType === "error"
                                ? "bg-red-500/10 border-red-500 text-red-400"
                                : "bg-yellow-500/10 border-yellow-500 text-yellow-400"
                        }`}
                    >
                        {message}
                    </div>
                )
            }

            <div className="space-y-4">

                <input
                    type="text"
                    placeholder="Instagram Username"
                    value={instagramUsername}
                    onChange={(e) =>
                        setInstagramUsername(
                            e.target.value
                        )
                    }
                    className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(
                            e.target.value
                        )
                    }
                    className="w-full p-4 rounded-xl bg-black border border-zinc-700"
                />

                <select
                    value={packageSelected}
                    onChange={(e) =>
                        setPackageSelected(
                            e.target.value
                        )
                    }
                    className="w-full p-4 rounded-xl bg-black border border-zinc-700 text-yellow-400 font-semibold"
                >
                    <option>
                        🎁 100 Followers - FREE
                    </option>

                    <option>
                        🪙 250 Followers - 250 Coins
                    </option>

                    <option>
                        🪙 500 Followers - 500 Coins
                    </option>

                    <option>
                        🪙 1000 Followers - 1000 Coins
                    </option>
                </select>


                <button
                    onClick={handleSubmit}
                    className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl font-semibold"
                >
                    Submit Order
                </button>

                {
                    success && (
                        <div className="bg-green-500/10 border border-green-500 rounded-xl p-4 text-green-400">
                            ✅ Order Completed Successfully
                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default QuickOrder;
