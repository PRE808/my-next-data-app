import Link from "next/link";

export async function getStaticPaths() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();

    const post = posts.find((p) => p.id.toString() === params.id);

    return {
      props: { post: post || null },
    };
  } catch (error) {
    return {
      props: { post: null },
    };
  }
}

export default function Post({ post }) {
  if (!post) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Post not found</h1>
        <Link href="/">Go Home</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>

      <p><strong>ID:</strong> {post.id}</p>

      <Link href="/">Go Home</Link>
    </div>
  );
}