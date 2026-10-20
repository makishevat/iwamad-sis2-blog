import { Button } from "../ui/Button";
import { useAuth } from "../context/AuthContext";

export function DashboardPage() {
  const { signOut } = useAuth();

  return (
    <section>
      <h1>Welcome back, Tomiris!</h1>
      <p>My posts: 5</p>
      <Button variant="secondary" onClick={signOut}>Sign out</Button>
    </section>
  );
}