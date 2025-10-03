import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "50px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#2d3436" }}>
          Welcome to IngreCTive
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
          Upload food labels, analyze ingredients, and stay informed about what
          you eat.
        </p>
      </main>
      <Footer />
    </>
  );
}
