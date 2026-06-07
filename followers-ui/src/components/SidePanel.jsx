import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SidePanel({ open, setOpen, user }) {
    const navigate = useNavigate();

    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50">

            <div className="w-72 h-full bg-zinc-900">

                <div className="flex justify-between items-center p-5 border-b border-zinc-800">

                    <div>
                        <h2 className="font-bold text-lg">
                            {user?.name || "Guest"}
                        </h2>

                        <p className="text-gray-400 text-sm">
                            {user ? user.email : "Please Login"}
                        </p>
                    </div>

                    <button onClick={() => setOpen(false)}>
                        <X size={24} />
                    </button>

                </div>

                <div className="p-4 space-y-3">

                    <MenuItem
                        text="Dashboard"
                        onClick={() => {
                            navigate("/dashboard");
                            setOpen(false);
                        }}
                    />

                    <MenuItem
                        text="Profile"
                        onClick={() => {
                            navigate("/profile");
                            setOpen(false);
                        }}
                    />

                    <MenuItem
                        text="Wallet"
                        onClick={() => {
                            navigate("/wallet");
                            setOpen(false);
                        }}
                    />

                    <MenuItem
                        text="Orders"
                        onClick={() => {
                            setOpen(false);
                        }}
                    />

                    <MenuItem
                        text="Referrals"
                        onClick={() => {
                            navigate("/referrals");
                            setOpen(false);
                        }}
                    />

                    <MenuItem
                        text="Settings"
                        onClick={() => {
                            setOpen(false);
                        }}
                    />

                    {user ? (
                        <button
                            onClick={() => {
                                localStorage.removeItem("user");
                                navigate("/login");
                                window.location.reload();
                            }}
                            className="w-full mt-8 bg-red-600 py-3 rounded-xl font-semibold"
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="space-y-3 mt-8">

                            <button
                                onClick={() => {
                                    navigate("/login");
                                    setOpen(false);
                                }}
                                className="w-full bg-purple-600 py-3 rounded-xl font-semibold"
                            >
                                Login
                            </button>

                            <button
                                onClick={() => {
                                    navigate("/register");
                                    setOpen(false);
                                }}
                                className="w-full bg-zinc-700 py-3 rounded-xl font-semibold"
                            >
                                Sign Up
                            </button>

                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}

function MenuItem({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full text-left p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700"
        >
            {text}
        </button>
    );
}

export default SidePanel;