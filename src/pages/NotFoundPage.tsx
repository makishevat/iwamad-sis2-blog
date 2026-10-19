import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <section>
      <h1>404: page not found</h1>
      <p>This page does not exist.</p>
      <Link to="/">Go home</Link>
    </section>
  );
}