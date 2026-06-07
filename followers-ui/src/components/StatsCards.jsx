function StatsCards() {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        );

    const stats = [
        {
            title: "Followers",
            value: user?.followers || 0,
            color: "text-purple-400",
            icon: "👥"
        },
        {
            title: "Orders",
            value: user?.orders || 0,
            color: "text-green-400",
            icon: "📦"
        },
        {
            title: "Coins",
            value: `🪙 ${user?.coins || 0}`,
            color: "text-yellow-400",
            icon: "🪙"
        },
        {
            title: "Referrals",
            value: user?.referrals || 0,
            color: "text-pink-400",
            icon: "🎁"
        },
    ];

    return (

        <div className="grid grid-cols-2 gap-3">

            {
                stats.map((item) => (

                    <div
                        key={item.title}
                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 transition"
                    >

                        <div className="flex justify-between items-center">

                            <p className="text-sm text-zinc-400">
                                {item.title}
                            </p>

                            <span className="text-xl">
                                {item.icon}
                            </span>

                        </div>

                        <h2
                            className={`text-3xl font-bold mt-3 ${item.color}`}
                        >
                            {item.value}
                        </h2>

                    </div>

                ))
            }

        </div>

    );

}

export default StatsCards;