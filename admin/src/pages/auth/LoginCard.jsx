/** @format */

import { motion } from "framer-motion";

import LoginLogo from "./LoginLogo";
import LoginForm from "../../components/forms/LoginForm";

const LoginCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className='w-11/12 max-w-5xl mt-[5rem]'>
      <div className='relative overflow-hidden rounded-[28px] border border-primary/15 bg-base-100/70 backdrop-blur-2xl'>
        <div className='pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl' />

        <div className='grid lg:grid-cols-2'>
          <div className='flex items-center justify-center border-b border-base-300 p-10 lg:border-b-0 lg:border-l'>
            <LoginLogo />
          </div>

          <div className='p-3'>
            <LoginForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginCard;
