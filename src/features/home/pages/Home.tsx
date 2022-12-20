import { Link } from "react-router-dom";
import MainLayout from "../../../components/layout/MainLayout";
import useUser from "../../../hooks/useUser";

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

      <Link to="/messages">View all messages</Link>
      <Link to="/messages/new">Post a new message</Link>
      <Link to="/profile">View your profile</Link>
    </MainLayout>
  );
}
