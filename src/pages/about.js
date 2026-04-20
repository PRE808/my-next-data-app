import Link from "next/link";

export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>

      <p>
        This is a simple Next.js routing assignment demonstrating pages and navigation.
      </p>

      <Link href="/">Go Home</Link>
    </div>
  );
}