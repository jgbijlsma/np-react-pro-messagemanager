import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function ProtectedRoutes() {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to="/user/select" />;
}
