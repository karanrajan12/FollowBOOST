import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

function Profile() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const initial =
        user?.userName?.charAt(0)?.toUpperCase() ||
        "U";

    return (

        <div className="bg-black min-h-screen text-white">

            <TopHeader />

            <div className="p-4 pb-24">

                {/* Profile Card */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

                    <div className="flex flex-col items-center">

                        <div className="w-24 h-24 rounded-full bg-purple-600 flex items-center justify-center text-4xl font-bold">
                            {initial}
                        </div>

                        <h2 className="text-2xl font-bold mt-4">
                            {user?.userName || "Guest"}
                        </h2>

                        <p className="text-zinc-400">
                            {user?.email || "Not Logged In"}
                        </p>

                    </div>

                </div>

                {/* Coins Card */}

                <div className="mt-6 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl p-6">

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

                            <span className="text-3xl">
                                🪙
                            </span>

                        </div>

                    </div>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                        <p className="text-zinc-400">
                            Followers
                        </p>

                        <h3 className="text-3xl font-bold text-purple-400 mt-2">
                            {user?.followers || 0}
                        </h3>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                        <p className="text-zinc-400">
                            Orders
                        </p>

                        <h3 className="text-3xl font-bold text-green-400 mt-2">
                            {user?.orders || 0}
                        </h3>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                        <p className="text-zinc-400">
                            Referrals
                        </p>

                        <h3 className="text-3xl font-bold text-pink-400 mt-2">
                            {user?.referrals || 0}
                        </h3>

                    </div>

                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                        <p className="text-zinc-400">
                            Account Status
                        </p>

                        <h3 className="text-xl font-bold text-green-400 mt-3">
                            Active
                        </h3>

                    </div>

                </div>

                {/* Referral Code */}

                <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">

                    <p className="text-zinc-400 mb-2">
                        Referral Code
                    </p>

                    <div className="bg-black rounded-xl p-4 text-center">

                        <span className="text-yellow-400 text-xl font-bold tracking-wider">
                            {user?.referralCode ||
                            "NOT AVAILABLE"}
                        </span>

                    </div>

                </div>

            </div>

            <BottomNav />

        </div>

    );

}

export default Profile;