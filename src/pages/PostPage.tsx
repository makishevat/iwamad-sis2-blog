import { Link, useParams } from "react-router";
import { posts } from "../data/posts";

export function PostPage() {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
        <p>There is no post with id {id}.</p>
        <Link to="/posts">Back to posts</Link>
      </section>
    );
  }

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><Link to="/posts">Back to posts</Link></p>
    </article>
  );
}