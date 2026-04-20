export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();

    return {
      props: {
        posts,
        time: new Date().toISOString(),
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        time: new Date().toISOString(),
        error: "Failed to load data",
      },
    };
  }
}

export default function ServerPage({ posts, time, error }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Server-Side Rendering Page</h1>

      <p><strong>Current Server Time:</strong> {time}</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <h2>Posts</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}