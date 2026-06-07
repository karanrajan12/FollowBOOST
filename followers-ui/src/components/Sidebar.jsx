import {
    Home,
    Gift,
    ShoppingCart,
    Wallet,
    User
} from "lucide-react";

function Sidebar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 z-50">

            <div className="flex justify-around py-3">

                <Home />
                <Gift />
                <ShoppingCart />
                <Wallet />
                <User />

            </div>

        </div>
    );
}

export default Sidebar;