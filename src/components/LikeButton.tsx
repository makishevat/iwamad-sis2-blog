
import { useLikes } from "../context/LikesContext";
import { Button } from "../ui/Button";

type LikeButtonProps = {
  postId: number;
};

export function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes();

  return (
    <Button
      className="like-btn"
      onClick={addLike}
      aria-label={`Like post ${postId} (${likes} likes)`}
    >
      Like ({likes})
    </Button>
  );
}
