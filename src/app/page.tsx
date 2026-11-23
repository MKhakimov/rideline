import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Rides from "@/components/sections/Rides/Rides";
import Routes from "@/components/sections/Routes/Routes";
import TelegramResources from "@/components/sections/TelegramResources/TelegramResources";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Rides />
                <Routes />
                <TelegramResources />
            </main>

            <Footer />
        </>
    );
}
