import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div style={{ color: "white", fontWeight: "bold" }}>IngreCTive</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/ocr">OCR</Link>
        <Link href="/chemicals">Chemicals</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
