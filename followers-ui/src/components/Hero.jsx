import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-7xl font-bold"
            >
                Get Free Followers
            </motion.h1>

            <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl">
                Grow your social presence with our premium platform.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mt-8">

                <button
                    onClick={() => navigate("/dashboard")}
                    className="px-8 py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition"
                >
                    Claim 100 Free Followers
                </button>

                <button
                    onClick={() => navigate("/register")}
                    className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition"
                >
                    Create Account
                </button>

            </div>

        </section>
    );
}

export default Hero;