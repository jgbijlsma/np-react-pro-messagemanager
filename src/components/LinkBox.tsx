import { Link } from "react-router-dom";
import "./LinkBox.css";

type LinkBoxProps = {
  to: string;
  children: React.ReactNode;
};

export default function LinkBox({ to, children }: LinkBoxProps) {
  return (
    <Link to={to} className="linkBox">
      {children}
    </Link>
  );
}
