import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus, House, Menu, X } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Tweetter</Link>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="nav-link"><House /> Home</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link"><LogIn /> Login</Link>
        </li>
        <li>
          <Link to="/register" className="nav-link"><UserPlus /> Register</Link>
        </li>
      </ul>
    </nav>
  );
}
