function RecentActivity() {
    const activities = [
        "100 Followers Added",
        "Wallet Created",
        "Account Registered"
    ];

    return (
        <div className="bg-zinc-900 rounded-2xl p-5">

            <h2 className="text-xl font-bold mb-4">
                Recent Activity
            </h2>

            <div className="space-y-3">

                {activities.map((item, index) => (
                    <div
                        key={index}
                        className="bg-black p-3 rounded-xl"
                    >
                        {item}
                    </div>
                ))}

            </div>

        </div>
    );
}

export default RecentActivity;