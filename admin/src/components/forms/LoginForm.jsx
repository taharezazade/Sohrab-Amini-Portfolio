/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeSlash, Login } from "iconsax-reactjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import useAuth from "../../hooks/useAuth";

import Input from "../ui/Input";
import Button from "../ui/Button";

const schema = z.object({
  email: z.string().email("ایمیل معتبر نیست."),
  password: z.string().min(8, "رمز عبور حداقل باید ۸ کاراکتر باشد."),
});

const LoginForm = () => {
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values) => {
    await login(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-fit flex-col justify-center'>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className='text-2xl font-black'>ورود مدیر</h2>

        <p className='mt-2 text-sm leading-7 text-base-content/60'>
          برای ورود به پنل مدیریت اطلاعات خود را وارد کنید.
        </p>
      </motion.div>

      <div className='mt-5 space-y-2'>
        <Input
          label='ایمیل'
          placeholder='admin@example.com'
          error={errors.email?.message}
          {...register("email")}
        />

        <Input
          label='رمز عبور'
          type={showPassword ? "text" : "password"}
          placeholder='••••••••'
          error={errors.password?.message}
          endIcon={
            <button
              type='button'
              onClick={() => setShowPassword((v) => !v)}
              className='transition hover:text-primary'>
              {showPassword ?
                <EyeSlash size={20} />
              : <Eye size={20} />}
            </button>
          }
          {...register("password")}
        />
      </div>

      <div className='mt-4'>
        <Button
          fullWidth
          loading={isSubmitting}
          type='submit'
          endIcon={<Login size={20} />}>
          ورود به پنل
        </Button>
      </div>

      <p className='my-5 text-center text-sm md:text-md leading-4 text-base-content/45'>
        فقط مدیر سایت امکان ورود به این بخش را دارد.
      </p>
    </form>
  );
};

export default LoginForm;
