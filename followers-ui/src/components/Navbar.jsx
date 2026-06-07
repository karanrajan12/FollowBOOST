import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    FollowBoost
                </h1>

                <div className="hidden md:flex gap-8">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                </div>

                <div className="hidden md:flex gap-4">
                    <Link to="/login">
                        <button className="px-5 py-2 rounded-xl border border-white/20">
                            Login
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="px-5 py-2 rounded-xl bg-purple-600">
                            Start Free
                        </button>
                    </Link>
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden"
                >
                    {open ? <X /> : <Menu />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black border-t border-white/10">
                    <div className="flex flex-col p-5 gap-4">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        <a href="#features">Features</a>
                        <a href="#pricing">Pricing</a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;