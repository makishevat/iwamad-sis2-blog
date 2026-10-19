import { Button } from "../ui/Button";
import { useAuth } from "../context/AuthContext";

export function DashboardPage() {
  const { signOut } = useAuth();

  return (
    <section>
      <h1>Dashboard</h1>
      <p>This page is only for signed-in readers.</p>
      <Button variant="secondary" onClick={signOut}>Sign out</Button>
    </section>
  );
}