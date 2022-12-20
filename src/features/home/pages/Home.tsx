import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import useUser from "../../../hooks/useUser";
import "../style/Home.css";

export default function Home() {
  const { user } = useUser();

  return (
    <MainLayout>
      <h1>Welcome {user ? user.username : "to the message board"}</h1>
      {user ? (
        <p>What would you like to do?</p>
      ) : (
        <p>
          You can read other user's messages. To post your own, you can{" "}
          <Link to="/users/select">select a username.</Link>
        </p>
      )}

      <nav className="linkBoxes">
        <Link to="/messages" className="linkBox">
          View all messages
        </Link>
        <Link to="/messages/new" className="linkBox">
          Post a new message
        </Link>
        <Link to="/profile" className="linkBox">
          View your profile
        </Link>
      </nav>
    </MainLayout>
  );
}
