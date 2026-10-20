import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { LikesProvider } from "./context/LikesContext";
import App from "./App";

it("shows sign-in instead of the dashboard when signed out", () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <AuthProvider>
        <LikesProvider>
          <App />
        </LikesProvider>
      </AuthProvider>
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument();
});