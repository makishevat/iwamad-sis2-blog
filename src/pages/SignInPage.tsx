import { useNavigate } from "react-router";
import { Button } from "../ui/Button";
import { useAuth } from "../context/AuthContext";

export function SignInPage() {
  const { signedIn, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <section>
      <h1>Sign in</h1>
      {signedIn ? (
        <>
          <p>You are signed in.</p>
          <Button variant="secondary" onClick={signOut}>Sign out</Button>
        </>
      ) : (
        <>
          <p>Sign in to see the dashboard.</p>
          <Button onClick={() => { signIn(); navigate("/dashboard"); }}>
            Sign in
          </Button>
        </>
      )}
    </section>
  );
}