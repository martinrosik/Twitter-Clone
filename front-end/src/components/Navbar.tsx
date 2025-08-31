import { Link } from "react-router-dom";
import { LogIn, UserPlus, House } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">Tweetter</Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className="flex nav-link gap-2"><House /> Home</Link>
        </li>
        <li>
          <Link to="/login" className="flex nav-link gap-2"><LogIn /> Login</Link>
        </li>
        <li>
          <Link to="/register" className="flex nav-link gap-2"><UserPlus /> Register</Link>
        </li>
      </ul>
    </nav>
  );
}