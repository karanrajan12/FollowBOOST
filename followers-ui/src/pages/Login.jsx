import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleLogin = async () => {

        try {

            setMessage("");

            if (!email || !password) {

                setMessage(
                    "⚠️ Please fill all fields"
                );

                setMessageType("warning");

                return;
            }

            const response = await API.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(
                    response.data.user
                )
            );

            setMessage(
                "✅ Login Successful"
            );

            setMessageType("success");

            setTimeout(() => {

                navigate("/dashboard");

            }, 1000);

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Login Failed"
            );

            setMessageType("error");

        }

    };

    return (

        <div className="min-h-screen bg-black flex justify-center items-center px-4">

            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    Login
                </h2>

                {
                    message && (

                        <div
                            className={`mb-5 p-4 rounded-xl border ${
                                messageType === "success"
                                    ? "bg-green-500/10 border-green-500 text-green-400"
                                    : messageType === "error"
                                    ? "bg-red-500/10 border-red-500 text-red-400"
                                    : "bg-yellow-500/10 border-yellow-500 text-yellow-400"
                            }`}
                        >
                            {message}
                        </div>

                    )
                }

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="w-full p-4 mb-4 rounded-xl bg-black border border-zinc-700 text-white"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="w-full p-4 mb-6 rounded-xl bg-black border border-zinc-700 text-white"
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl text-white font-semibold"
                >
                    Login
                </button>

                <div className="mt-6 text-center border-t border-zinc-800 pt-6">

                    <p className="text-zinc-400">
                        Don't have an account?
                    </p>

                    <button
                        onClick={() =>
                            navigate("/register")
                        }
                        className="mt-3 w-full border border-purple-500 text-purple-400 py-3 rounded-xl hover:bg-purple-500 hover:text-white transition"
                    >
                        Create Account
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Login;