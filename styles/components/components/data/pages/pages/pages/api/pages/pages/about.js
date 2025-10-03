import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h2>About IngreCTive</h2>
        <p>
          IngreCTive is a project designed to help people understand food labels
          better. By scanning ingredients and nutrition facts, we highlight
          harmful chemicals and make healthier choices easier.
        </p>
      </main>
      <Footer />
    </>
  );
}
