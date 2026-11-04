import Container from "@/components/layout/Container/Container";
import Header from "@/components/layout/Header/Header";

export default function Home() {
    return (
        <>
            <Header />

            <main>
                <Container>
                    <h1>RIDELINE</h1>
                    <p>Mountain Bike Culture</p>
                </Container>
            </main>
        </>
    );
}