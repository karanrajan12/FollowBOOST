import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
        </div>
    );
}

export default Home;