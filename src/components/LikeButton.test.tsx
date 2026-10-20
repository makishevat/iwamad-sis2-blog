import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LikesProvider } from "../context/LikesContext";
import { LikeButton } from "./LikeButton";

it("increases the like count when clicked", async () => {
  render(
    <LikesProvider>
      <LikeButton postId={1} />
    </LikesProvider>
  );
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("♥ 0");
  await userEvent.click(button);
  expect(button).toHaveTextContent("♥ 1");
});