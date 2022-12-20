import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <main>
        <h1 className="text-4xl mb-4">404 NOT FOUND</h1>
        <p className="">Oh no, this page was not found:</p>
        <p>
          You can navigate{" "}
          <button
            onClick={() => navigate(-1)}
            className="text-blue-500 hover:underline"
          >
            back
          </button>{" "}
          and try another page
        </p>
      </main>
    </MainLayout>
  );
}
