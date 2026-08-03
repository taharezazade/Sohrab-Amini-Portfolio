/** @format */

import { Route, Routes } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "../pages/auth/LoginPage";
import DashboardPage from "../pages/dashboard/Dashboard";
import HeroPage from "../pages/hero/Hero";
import AboutPage from "../pages/about/About";
import ServicesPage from "../pages/services/Services";
import PortfolioPage from "../pages/portfolio/Portfolio";
import ContactPage from "../pages/contact/Contact";
import SettingsPage from "../pages/settings/Settings";
import NotFoundPage from "../pages/NotFound";
import Profile from "../pages/profile/profile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* =======================================================
            Public Routes
        ======================================================= */}

      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Route>

      {/* =======================================================
            Protected Routes
        ======================================================= */}

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/hero' element={<HeroPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
      </Route>

      {/* =======================================================
            Redirect
        ======================================================= */}

      {/* <Route path='/' element={<Navigate to='/dashboard' replace />} /> */}
      <Route path='/' element={<DashboardPage />} />

      {/* =======================================================
            404
        ======================================================= */}

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
