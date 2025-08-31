import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import HomePage from "./features/home/HomePage";
import LoginPage from "./features/login/LoginPage";
import RegisterPage from "./features/register/RegisterPage";
import NotFoundPage from "./features/notfoundpage/NotFoundPage";

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
