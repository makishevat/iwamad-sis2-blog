import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

export function PostsPage() {
  return (
    <section>
      <h1>Posts</h1>
      <div className="posts-grid">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      </div>
    </section>
  )
}