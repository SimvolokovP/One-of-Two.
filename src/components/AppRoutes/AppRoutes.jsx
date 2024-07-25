import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";
import CreatorPage from "../../pages/CreatorPage/CreatorPage";
import TestPage from "../../pages/TestPage/TestPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/login" Component={LoginPage} />
      <Route path="/profile" Component={ProfilePage} />
      <Route path="/creator" Component={CreatorPage} />
      <Route path="/test/:id" Component={TestPage} />
    </Routes>
  );
}
