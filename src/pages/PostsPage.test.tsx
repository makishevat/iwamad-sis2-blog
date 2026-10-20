import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { LikesProvider } from "../context/LikesContext";
import { PostsPage } from "./PostsPage";
import { posts } from "../data/posts";

it("shows one card per post", () => {
  render(
    <MemoryRouter>
      <LikesProvider>
        <PostsPage />
      </LikesProvider>
    </MemoryRouter>
  );
  expect(screen.getAllByRole("article")).toHaveLength(posts.length);
});