import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./home/_layout/HomePage";
import LoginPage from "./account/login/LoginPage";
import RegisterPage from "./account/register/RegisterPage";
import NotFoundPage from "./notfoundpage/NotFoundPage";
import { initAuth } from "./_shared/store/useAuthStore";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function AuthLayout() {
  return <Outlet />;
}

initAuth();

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
