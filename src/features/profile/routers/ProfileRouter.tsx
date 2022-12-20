import { Route, Routes } from "react-router-dom";
import NotFound from "../../../pages/NotFound";
import ProtectedRoute from "../../../routers/ProtectedRoute";
import Profile from "../pages/Profile";

export default function ProfileRouter() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
