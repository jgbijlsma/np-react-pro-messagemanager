import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function NavBar() {
  const { user, signOut } = useUser();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/messages">Messages</Link>

      {user && <Link to="/profile">Profile</Link>}

      {user ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <Link to="/users/select">Select a username</Link>
      )}
    </nav>
  );
}
