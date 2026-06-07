import {
    Shield,
    Zap,
    BarChart3,
    Clock,
} from "lucide-react";

const features = [
    {
        icon: <Zap size={32} />,
        title: "Fast Processing",
        desc: "Quick order handling and tracking."
    },
    {
        icon: <Shield size={32} />,
        title: "Secure Platform",
        desc: "Protected accounts and transactions."
    },
    {
        icon: <BarChart3 size={32} />,
        title: "Analytics",
        desc: "Track every order in real time."
    },
    {
        icon: <Clock size={32} />,
        title: "24/7 Access",
        desc: "Manage requests anytime."
    }
];

function Features() {
    return (
        <section
            id="features"
            className="py-32 max-w-7xl mx-auto px-6"
        >
            <h2 className="text-5xl font-bold text-center mb-16">
                Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item) => (
                    <div
                        key={item.title}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300"
                    >
                        <div className="text-purple-500 mb-4">
                            {item.icon}
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">
                            {item.title}
                        </h3>

                        <p className="text-gray-400">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;