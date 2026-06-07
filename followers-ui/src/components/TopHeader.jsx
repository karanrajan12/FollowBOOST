import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function TopHeader() {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {

        const storedUser =
            localStorage.getItem("user");

        if (storedUser) {

            setUser(
                JSON.parse(storedUser)
            );

        }

    }, []);

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/login");

    };

    const initial =
        user?.userName?.charAt(0)?.toUpperCase() ||
        "U";

    return (

        <div className="sticky top-0 z-50 bg-zinc-950 border-b border-zinc-800">

            <div className="flex items-center justify-between px-4 py-4">

                {/* Profile */}

                <div
                    onClick={() => navigate("/profile")}
                    className="cursor-pointer"
                >

                    <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center font-bold text-lg text-white">
                        {initial}
                    </div>

                </div>

                {/* Logo */}

                <div className="text-center">

                    <h1 className="text-xl font-bold text-white">
                        FollowBoost
                    </h1>

                    <p className="text-xs text-zinc-400">
                        Grow Faster
                    </p>

                </div>

                {/* Coins */}

                <div className="text-right">

                    <div
                        onClick={() =>
                            navigate("/coins")
                        }
                        className="cursor-pointer flex items-center gap-2 justify-end"
                    >

                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center shadow-lg">

                            <span className="text-black font-bold">
                                C
                            </span>

                        </div>

                        <span className="text-yellow-400 font-bold text-lg">
                            {user?.coins ?? 0}
                        </span>

                    </div>

                    {
                        user ? (

                            <button
                                onClick={handleLogout}
                                className="text-xs text-red-400 mt-1"
                            >
                                Logout
                            </button>

                        ) : (

                            <button
                                onClick={() =>
                                    navigate("/login")
                                }
                                className="text-xs text-purple-400 mt-1"
                            >
                                Login
                            </button>

                        )
                    }

                </div>

            </div>

        </div>

    );

}

export default TopHeader;