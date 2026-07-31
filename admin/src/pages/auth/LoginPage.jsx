/** @format */

import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loading from "../../components/ui/Loading";
import LoginBackground from "./LoginBackground";
import LoginCard from "./LoginCard";

const LoginPage = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading fullScreen />;
  }

  if (isAuthenticated) {
    return <Navigate to='/dashboard' replace />;
  }

  return (
    <>
      <LoginBackground />

      <div className='relative z-10 lg:top-14 flex items-center justify-center'>
        <LoginCard />
      </div>
    </>
  );
};

export default LoginPage;

// components / forms / LoginForm.jsx;

// components / ui / Input.jsx;
// Button.jsx;
// Card.jsx;
// LoadingButton.jsx;
