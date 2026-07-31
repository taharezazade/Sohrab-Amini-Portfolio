/** @format */

import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-base-200'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    );
  }

  return (
    <div dir='rtl' className='min-h-screen bg-base-200 overflow-x-hidden'>
      {/* ===========================
          Sidebar
      =========================== */}

      <Sidebar />

      <div className='lg:pr-72'>
        {/* ===========================
            Header
        =========================== */}

        <Header />

        {/* ===========================
            Main Content
        =========================== */}

        <main className='p-4 md:p-6 lg:p-8'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
