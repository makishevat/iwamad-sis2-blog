import { Link } from 'react-router'
import type { Post } from '../data/posts'
import { LikeButton } from './LikeButton'

type PostCardProps = {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="card">
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <Link to={`/posts/${post.id}`}>Read more</Link>
      <LikeButton postId={post.id} />
    </article>
  )
}