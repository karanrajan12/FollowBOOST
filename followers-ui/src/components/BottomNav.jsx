import {
    Home,
    Gift,
    ShoppingCart,
    Wallet,
    User
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

function BottomNav() {
    const navigate = useNavigate();
    const location = useLocation();

    const active = "text-purple-500";
    const normal = "text-gray-400";

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 z-50">

            <div className="flex justify-around py-3">

                <button
                    onClick={() => navigate("/dashboard")}
                    className={
                        location.pathname === "/dashboard"
                            ? active
                            : normal
                    }
                >
                    <Home size={24} />
                </button>

                <button
                    onClick={() => navigate("/free-claim")}
                    className={
                        location.pathname === "/free-claim"
                            ? active
                            : normal
                    }
                >
                    <Gift size={24} />
                </button>

                <button
                    onClick={() => navigate("/orders")}
                    className={
                        location.pathname === "/orders"
                            ? active
                            : normal
                    }
                >
                    <ShoppingCart size={24} />
                </button>

                <button
                    onClick={() => navigate("/wallet")}
                    className={
                        location.pathname === "/wallet"
                            ? active
                            : normal
                    }
                >
                    <Wallet size={24} />
                </button>

                <button
                    onClick={() => navigate("/profile")}
                    className={
                        location.pathname === "/profile"
                            ? active
                            : normal
                    }
                >
                    <User size={24} />
                </button>

            </div>

        </div>
    );
}

export default BottomNav;