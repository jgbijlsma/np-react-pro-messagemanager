import { Route, Routes } from "react-router-dom";
import NotFound from "../../../pages/NotFound";
import SelectUsername from "../pages/SelectUsername";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="/select" element={<SelectUsername />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
