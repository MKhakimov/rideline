import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import Rides from "@/components/sections/Rides/Rides";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Rides />
            </main>

            <Footer />
        </>
    );
}
