import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute() {
  const { signedIn } = useAuth();
  return signedIn ? <Outlet /> : <Navigate to="/signin" replace />;
}