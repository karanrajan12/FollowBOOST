import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Wallet from "./pages/Wallet";
import Referrals from "./pages/Referrals";
import Orders from "./pages/Orders";
import FreeClaim from "./pages/FreeClaim";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Dashboard Pages */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/referrals" element={<Referrals />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/free-claim" element={<FreeClaim />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;