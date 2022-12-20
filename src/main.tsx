import "./style/index.css";
import ReactDOM from "react-dom/client";
import AppProvider from "./providers/AppProvider";
import AppRouter from "./routers/AppRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppProvider>
    <AppRouter />
  </AppProvider>
);
