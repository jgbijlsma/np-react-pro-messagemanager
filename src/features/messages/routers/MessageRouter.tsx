import { Route, Routes } from "react-router-dom";
import NotFound from "../../../pages/NotFound";
import ProtectedRoute from "../../../routers/ProtectedRoute";
import MessageOverview from "../pages/MessageOverview";
import NewMessage from "../pages/NewMessage";

export default function MessageRouter() {
  return (
    <Routes>
      <Route path="/" element={<MessageOverview />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/new" element={<NewMessage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
