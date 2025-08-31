import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/notfoundpage.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Page not found. Redirecting to homepage...</p>
    </div>
  );
}
