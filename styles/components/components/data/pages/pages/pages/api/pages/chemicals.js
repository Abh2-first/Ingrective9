import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import chemicals from "../data/chemicals.json";

export default function Chemicals() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "40px" }}>
        <h2>Common Harmful Chemicals</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {chemicals.map((chem, index) => (
            <div key={index} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "20px", background: "#fff" }}>
              <h3>{chem.name}</h3>
              <p>{chem.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
