import { Route, Routes } from "react-router-dom";
import Home from "../features/home/pages/Home";
import MessageRouter from "../features/messages/routers/MessageRouter";
import ProfileRouter from "../features/profile/routers/ProfileRouter";
import UserRouter from "../features/users/routers/UserRouter";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages/*" element={<MessageRouter />} />
      <Route path="/users/*" element={<UserRouter />} />
      <Route path="/profile/*" element={<ProfileRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
