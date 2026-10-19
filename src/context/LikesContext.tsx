import { createContext, useContext, useState, type ReactNode } from "react";

type LikesContextValue = {
  likes: Record<number, number>;
  addLike: (postId: number) => void;
};

const LikesContext = createContext<LikesContextValue | null>(null);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<number, number>>({});
  const addLike = (postId: number) =>
    setLikes((prev) => ({ ...prev, [postId]: (prev[postId] ?? 0) + 1 }));

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes(): LikesContextValue {
  const ctx = useContext(LikesContext);
  if (!ctx) {
    throw new Error("useLikes must be used inside <LikesProvider>");
  }
  return ctx;
}