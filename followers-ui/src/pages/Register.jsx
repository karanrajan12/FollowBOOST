import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Register() {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [acceptTerms, setAcceptTerms] =
        useState(false);

    const [message, setMessage] = useState("");
    const [messageType, setMessageType] =
        useState("");

    const handleRegister = async () => {

        try {

            setMessage("");

            if (
                !userName ||
                !email ||
                !password ||
                !confirmPassword
            ) {

                setMessage(
                    "⚠️ Please fill all fields"
                );

                setMessageType("warning");

                return;
            }

            if (password !== confirmPassword) {

                setMessage(
                    "⚠️ Passwords do not match"
                );

                setMessageType("warning");

                return;
            }

            if (!acceptTerms) {

                setMessage(
                    "⚠️ Please accept Terms & Conditions"
                );

                setMessageType("warning");

                return;
            }

            const response = await API.post(
                "/auth/register",
                {
                    userName,
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
                "✅ Account Created Successfully"
            );

            setMessageType("success");

            setTimeout(() => {

                navigate("/dashboard");

            }, 1000);

        } catch (error) {

            setMessage(
                error.response?.data?.message ||
                "Registration Failed"
            );

            setMessageType("error");

        }

    };

    return (

        <div className="min-h-screen bg-black flex justify-center items-center px-4">

            <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

                <h2 className="text-4xl font-bold text-white mb-8 text-center">
                    Create Account
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
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) =>
                        setUserName(e.target.value)
                    }
                    className="w-full p-4 mb-4 rounded-xl bg-black border border-zinc-700 text-white"
                />

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
                    className="w-full p-4 mb-4 rounded-xl bg-black border border-zinc-700 text-white"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                        setConfirmPassword(
                            e.target.value
                        )
                    }
                    className="w-full p-4 mb-4 rounded-xl bg-black border border-zinc-700 text-white"
                />

                <div className="mb-6">

                    <label className="flex items-start gap-3 cursor-pointer">

                        <input
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) =>
                                setAcceptTerms(
                                    e.target.checked
                                )
                            }
                            className="mt-1 w-4 h-4 accent-purple-600"
                        />

                        <span className="text-zinc-400 text-sm">

                            I agree to the

                            <span className="text-purple-400 ml-1">
                                Terms & Conditions
                            </span>

                            {" "}and{" "}

                            <span className="text-purple-400">
                                Privacy Policy
                            </span>

                        </span>

                    </label>

                </div>

                <button
                    onClick={handleRegister}
                    className="w-full bg-purple-600 hover:bg-purple-700 transition py-4 rounded-xl text-white font-semibold"
                >
                    Create Account
                </button>

                <div className="mt-6 text-center border-t border-zinc-800 pt-6">

                    <p className="text-zinc-400">
                        Already have an account?
                    </p>

                    <button
                        onClick={() =>
                            navigate("/login")
                        }
                        className="mt-3 w-full border border-purple-500 text-purple-400 py-3 rounded-xl hover:bg-purple-500 hover:text-white transition"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Register;