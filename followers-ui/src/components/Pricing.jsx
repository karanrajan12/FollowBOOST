const plans = [
    { followers: 100, price: "Free" },
    { followers: 250, price: "₹49" },
    { followers: 500, price: "₹99" },
    { followers: 1000, price: "₹179" },
    { followers: 3000, price: "₹449" },
    { followers: 5000, price: "₹699" },
];

function Pricing() {
    return (
        <section className="py-24">
            <h2 className="text-5xl text-center mb-12">
                Pricing
            </h2>

            <div className="grid md:grid-cols-3 gap-6 px-10">
                {plans.map((plan) => (
                    <div
                        key={plan.followers}
                        className="border border-gray-800 rounded-2xl p-8 hover:border-purple-500 transition"
                    >
                        <h3 className="text-3xl font-bold">
                            {plan.price}
                        </h3>

                        <p className="mt-4 text-gray-400">
                            {plan.followers} Followers
                        </p>

                        <button className="w-full mt-6 bg-purple-600 py-3 rounded-xl">
                            Select Plan
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;