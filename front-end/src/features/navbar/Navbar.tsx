import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, UserPlus, House, Menu, X, User } from 'lucide-react';
import './navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUsername(payload.username || payload.email || "User");
      } catch {
        setUsername("User");
      }
    }
  }, []);


  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsername(null);
    navigate("/");
  };

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

        {username ? (
          <>
            <li className="nav-link username">
              <User size={16} /> {username}
            </li>
            <li>
              <button className="nav-link logout-button" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-link"><LogIn /> Login</Link>
            </li>
            <li>
              <Link to="/register" className="nav-link"><UserPlus /> Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
