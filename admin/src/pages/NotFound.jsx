/** @format */

import { Link } from "react-router-dom";
import { Warning2 } from "iconsax-reactjs";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center'>
      <Warning2 size={72} variant='Bulk' className='text-warning' />

      <h1 className='text-7xl font-black'>404</h1>

      <h2 className='text-2xl font-bold'>صفحه مورد نظر پیدا نشد.</h2>

      <p className='max-w-md text-base-content/60'>
        ممکن است آدرس را اشتباه وارد کرده باشید یا صفحه حذف شده باشد.
      </p>

      <Link to='/dashboard'>
        <Button>بازگشت به داشبورد</Button>
      </Link>
    </div>
  );
};

export default NotFound;
