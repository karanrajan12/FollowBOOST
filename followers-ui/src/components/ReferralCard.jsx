function ReferralCard() {

    return (

        <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl p-5 shadow-xl">

            <div className="flex items-center justify-between">

                <div>

                    <h2 className="text-2xl font-bold text-black">
                        🎁 Referral Rewards
                    </h2>

                    <p className="text-black/70 mt-2">
                        Invite friends and earn
                        <span className="font-bold">
                            {" "}100 Coins
                        </span>
                        {" "}for every successful referral.
                    </p>

                </div>

                <div className="text-6xl">
                    🪙
                </div>

            </div>

            <div className="mt-5 bg-black/20 rounded-2xl p-4">

                <div className="flex justify-between">

                    <span className="text-black font-medium">
                        1 Friend Joined
                    </span>

                    <span className="font-bold text-black">
                        +100 Coins
                    </span>

                </div>

                <div className="flex justify-between mt-3">

                    <span className="text-black font-medium">
                        5 Friends Joined
                    </span>

                    <span className="font-bold text-black">
                        +500 Coins
                    </span>

                </div>

                <div className="flex justify-between mt-3">

                    <span className="text-black font-medium">
                        10 Friends Joined
                    </span>

                    <span className="font-bold text-black">
                        +1000 Coins
                    </span>

                </div>

            </div>

            <button
                className="w-full mt-5 bg-black text-yellow-400 py-3 rounded-xl font-bold hover:bg-zinc-900 transition"
            >
                Invite Friends
            </button>

        </div>

    );

}

export default ReferralCard;