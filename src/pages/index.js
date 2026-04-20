import Link from "next/link";

export async function getStaticProps() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();

    return {
      props: { posts },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        error: "Failed to load posts",
      },
    };
  }
}

export default function Home({ posts, error }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      {/* Navigation */}
      <nav>
        <Link href="/about">About</Link> |{" "}
        <Link href="/contact">Contact</Link> |{" "}
        <Link href="/client">Client Fetch</Link> |{" "}
        <Link href="/server">Server Fetch</Link>
      </nav>

      <h2>Posts</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}