import { useEffect, useState } from "react";

import TopHeader from "../components/TopHeader";
import BottomNav from "../components/BottomNav";

function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const response = await fetch(
                    "http://localhost:5000/api/order/my-orders",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                const data =
                    await response.json();

                if (data.success) {
                    setOrders(data.orders);
                }

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchOrders();

    }, []);

    return (
        <div className="bg-black min-h-screen text-white">

            <TopHeader />

            <div className="p-4 pb-24">

                <h1 className="text-3xl font-bold mb-6">
                    My Orders
                </h1>

                {
                    loading ? (
                        <div className="text-center py-10 text-zinc-400">
                            Loading Orders...
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center text-zinc-400">
                            No Orders Found
                        </div>
                    ) : (
                        <div className="space-y-4">

                            {
                                orders.map((order) => (

                                    <div
                                        key={order._id}
                                        className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
                                    >

                                        <div className="flex justify-between items-center">

                                            <div>

                                                <h2 className="font-bold text-lg">
                                                    {order.instagramUsername}
                                                </h2>

                                                <p className="text-zinc-400 text-sm">
                                                    {order.packageSelected}
                                                </p>

                                            </div>

                                            <div>

                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm ${
                                                        order.status === "Completed"
                                                            ? "bg-green-500/20 text-green-400"
                                                            : order.status === "Processing"
                                                            ? "bg-yellow-500/20 text-yellow-400"
                                                            : "bg-blue-500/20 text-blue-400"
                                                    }`}
                                                >
                                                    {order.status}
                                                </span>

                                            </div>

                                        </div>

                                        <div className="mt-4 text-zinc-500 text-sm">

                                            Created:
                                            {" "}
                                            {
                                                new Date(
                                                    order.createdAt
                                                ).toLocaleString()
                                            }

                                        </div>

                                    </div>

                                ))
                            }

                        </div>
                    )
                }

            </div>

            <BottomNav />

        </div>
    );
}

export default Orders;