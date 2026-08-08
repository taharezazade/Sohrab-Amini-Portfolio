/** @format */

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Dashboard from "./pages/Admin/Dashboard";

import HeroSettings from "./pages/Admin/HeroSettings";

function App() {
  return (
    <Routes>
      {/* =====================
    Public Website
===================== */}

      <Route
        path='/'

        element={<Home />}
      />

      {/* =====================
    Admin Panel
===================== */}

      <Route
        path='/admin'

        element={<Dashboard />}
      />

      <Route
        path='/admin/hero'

        element={<HeroSettings />}
      />
    </Routes>
  );
}

export default App;
