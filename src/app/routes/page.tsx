import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Routes from "@/components/sections/Routes/Routes";

export default function RoutesPage() {
    return (
        <>
            <Header />
            <main>
                <Routes showAll />
            </main>
            <Footer />
        </>
    );
}
