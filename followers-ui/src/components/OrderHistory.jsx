import { useEffect, useState } from "react";

function OrderHistory() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const response = await fetch(
                    "https://followboost.onrender.com/api/order/all"
                );

                const data =
                    await response.json();

                if (data.success) {

                    setOrders(data.orders);

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchOrders();

    }, []);

    return (

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <h2 className="text-2xl font-bold mb-6">
                📦 Recent Orders
            </h2>

            {
                orders.length === 0 ? (

                    <div className="text-center text-zinc-500 py-10">
                        No Orders Found
                    </div>

                ) : (

                    <div className="space-y-4">

                        {
                            orders.slice(0, 10).map((order) => (

                                <div
                                    key={order._id}
                                    className="bg-black border border-zinc-800 rounded-2xl p-4"
                                >

                                    <div className="flex justify-between items-center">

                                        <div>

                                            <h3 className="font-bold text-lg">
                                                {order.packageSelected}
                                            </h3>

                                            <p className="text-zinc-400 text-sm mt-1">
                                                @{order.instagramUsername}
                                            </p>

                                        </div>

                                        <div>

                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                    order.status === "Completed"
                                                        ? "bg-green-500/20 text-green-400"
                                                        : "bg-yellow-500/20 text-yellow-400"
                                                }`}
                                            >
                                                {order.status || "Processing"}
                                            </span>

                                        </div>

                                    </div>

                                    <div className="mt-4 flex justify-between text-sm text-zinc-500">

                                        <span>
                                            {new Date(
                                                order.createdAt
                                            ).toLocaleDateString()}
                                        </span>

                                        <span>
                                            Order ID:
                                            {" "}
                                            {order._id.slice(-6)}
                                        </span>

                                    </div>

                                </div>

                            ))
                        }

                    </div>

                )
            }

        </div>

    );

}

export default OrderHistory;
