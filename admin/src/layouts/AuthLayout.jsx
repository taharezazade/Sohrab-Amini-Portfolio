/** @format */

import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthLayout = () => {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-base-200'>
        <span className='loading loading-spinner skeleton skeleton-text loading-lg text-primary'></span>
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return (
    <main className='min-h-screen bg-base-200'>
      <Outlet />
    </main>
  );
};

export default AuthLayout;

