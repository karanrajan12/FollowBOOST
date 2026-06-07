import TopHeader from "../components/TopHeader";
import StatsCards from "../components/StatsCards";
import QuickOrder from "../components/QuickOrder";
import OrderHistory from "../components/OrderHistory";
import BottomNav from "../components/BottomNav";

import AnnouncementBanner from "../components/AnnouncementBanner";
import RecentActivity from "../components/RecentActivity";
import ReferralCard from "../components/ReferralCard";
import FooterCopyright from "../components/FooterCopyright";

function Dashboard() {

    return (

        <div className="bg-black min-h-screen text-white">

            <TopHeader />

            <div className="p-4 pb-24 space-y-6">

                {/* Welcome Banner */}

                <div className="bg-gradient-to-r from-yellow-500 to-amber-600 rounded-3xl p-6 shadow-xl">

                    <div className="flex items-center justify-between">

                        <div>

                            <h2 className="text-2xl font-bold text-black">
                                Welcome Back 👋
                            </h2>

                            <p className="text-black/70 mt-2">
                                Use your coins to buy followers instantly.
                            </p>

                        </div>

                        <div className="text-6xl">
                            🪙
                        </div>

                    </div>

                </div>

                <AnnouncementBanner />

                <StatsCards />

                {/* Coin Benefits */}

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">

                    <h2 className="text-xl font-bold mb-4">
                        Coin Benefits
                    </h2>

                    <div className="space-y-3">

                        <div className="flex justify-between">
                            <span>
                                100 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 100
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>
                                250 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 250
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>
                                500 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 500
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span>
                                1000 Followers
                            </span>

                            <span className="text-yellow-400 font-bold">
                                🪙 1000
                            </span>
                        </div>

                    </div>

                </div>

                <QuickOrder />

                <RecentActivity />

                <ReferralCard />

                <OrderHistory />

                <FooterCopyright />

            </div>

            <BottomNav />

        </div>

    );

}

export default Dashboard;