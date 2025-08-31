import { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus, House, Menu, X } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Tweetter</Link>

      <div className="hamburger md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''} md:flex`}>
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
