/** @format */

import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

const DashboardLayout = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div
        dir='rtl'
        className='
          flex
          min-h-screen
          items-center
          justify-center
          bg-base-200
        '>
        <span
          className='
            loading
            loading-spinner
            loading-lg
            text-primary
          '
        />
      </div>
    );
  }

  return (
    <div
      dir='rtl'
      className='
        min-h-screen
        overflow-x-hidden
        bg-base-200
      '>
      <Sidebar />

      <div className='lg:mr-56'>
        <Header />

        <main
          className='
            px-4
            pb-8
            pt-24

            md:px-6

            lg:px-8
          '>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
