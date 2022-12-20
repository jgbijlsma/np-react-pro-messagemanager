import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import "./NavBar.css";

export default function NavBar() {
  const { user, signOut } = useUser();

  return (
    <nav className="container navbar">
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/messages" className="navLink">
          Messages
        </Link>

        {user && (
          <Link to="/profile" className="navLink">
            Profile
          </Link>
        )}
      </div>
      <div>
        {user ? (
          <button className="navButton" onClick={signOut}>
            Sign out
          </button>
        ) : (
          <Link to="/users/select" className="navLink">
            Select a username
          </Link>
        )}
      </div>
    </nav>
  );
}
