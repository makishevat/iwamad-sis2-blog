import { useLikes } from "../context/LikesContext";
import { Button } from "../ui/Button";

type LikeButtonProps = {
  postId: number;
};

export function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes();
  const count = likes[postId] ?? 0;

  return (
    <Button className="like-btn" onClick={() => addLike(postId)}>
      ♥ {count}
    </Button>
  );
}
