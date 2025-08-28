import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Tweetter</a>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">Home</a>
        </li>
        <li>
          <a href="/login" className="nav-link">Login</a>
        </li>
        <li>
          <a href="/register" className="nav-link">Register</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
