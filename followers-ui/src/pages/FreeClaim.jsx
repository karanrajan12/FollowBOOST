import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

function FreeClaim() {
    return (
        <div className="bg-black min-h-screen text-white">

            <TopHeader />

            <div className="p-4 pb-24">

                <div className="bg-zinc-900 rounded-3xl p-6">

                    <h1 className="text-3xl font-bold">
                        Claim Free Followers
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Claim your free 100 followers.
                    </p>

                    <button className="w-full mt-6 bg-purple-600 py-4 rounded-xl">
                        Claim Now
                    </button>

                </div>

            </div>

            <BottomNav />

        </div>
    );
}

export default FreeClaim;