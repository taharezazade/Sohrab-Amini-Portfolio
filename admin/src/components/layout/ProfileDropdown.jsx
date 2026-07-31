/** @format */

import { Logout, ProfileCircle, Setting2 } from "iconsax-reactjs";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
// const { admin } = useAuth();
const ProfileDropdown = () => {
  const { admin, logout } = useAuth();

  return (
    <div className='dropdown dropdown-end'>
      {/* =======================================================
          Trigger
      ======================================================= */}

      <button
        type='button'
        tabIndex={0}
        className='btn btn-ghost h-auto gap-2 p-2 rounded-xl'>
        <div className='text-left hidden sm:block'>
          <p className='font-semibold'>{admin?.username || "مدیر سایت"}</p>

          <p className='text-xs text-base-content/60'>مدیر سیستم</p>
        </div>

        <div className='avatar placeholder'>
          <div className='w-11 rounded-full bg-primary text-primary-content'>
            <span className='text-lg font-bold'>
              {admin?.username?.charAt(0)?.toUpperCase() || "A"}
            </span>
          </div>
        </div>
      </button>

      {/* =======================================================
          Dropdown Menu
      ======================================================= */}

      <ul
        tabIndex={0}
        className='dropdown-content menu gap-2 z-50 mt-3 w-64 rounded-2xl border border-base-300 bg-base-100 p-2 shadow-xl'>
        {/* User Info */}

        <li className='pointer-events-none rounded-2xl bg-base-200 p-1'>
          <p className='text-base font-bold'>{admin?.username}</p>

          <p className='text-sm text-base-content/60'>{admin?.email}</p>
        </li>

        {/* Profile */}

        <li>
          <Link to='/dashboard/settings' className='rounded-xl hover:text-primary hover:bg-primary/10'>
            <ProfileCircle size={20} variant='Bulk' />
            پروفایل
          </Link>
        </li>

        {/* Settings */}

        <li>
          <Link to='/dashboard/settings' className='rounded-xl hover:text-primary hover:bg-primary/10'>
            <Setting2 size={20} variant='Bulk' />
            تنظیمات
          </Link>
        </li>

        <div className='my-2 border-t border-base-300' />

        {/* Logout */}

        <li>
          <button type='button' onClick={logout} className='text-error rounded-xl hover:bg-error/10'>
            <Logout size={20} variant='Bulk' />
            خروج از حساب کاربری
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
