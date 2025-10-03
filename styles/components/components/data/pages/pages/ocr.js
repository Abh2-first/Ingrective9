import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function OCR() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const harmfulChemicals = ["Maltodextrin", "MSG", "Sodium Benzoate", "Artificial Colors", "Artificial Sweeteners", "Hydrogenated Oils"];

  const highlightText = (text) => {
    let highlighted = text;
    harmfulChemicals.forEach((chem) => {
      const regex = new RegExp(chem, "gi");
      highlighted = highlighted.replace(regex, `<span style="color:red;font-weight:bold">${chem}</span>`);
    });
    return highlighted;
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("data", file);

    try {
      const response = await fetch("/api/ocr", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(highlightText(data.text || "No text found"));
    } catch (err) {
      setResult("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h2>Upload an Image of a Food Label</h2>
        <input type="file" onChange={handleUpload} />
        {loading && <p>Processing...</p>}
        <div
          style={{ marginTop: "20px", textAlign: "left" }}
          dangerouslySetInnerHTML={{ __html: result }}
        />
      </main>
      <Footer />
    </>
  );
}
