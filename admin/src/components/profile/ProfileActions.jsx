/** @format */

import { Logout, Refresh2, Save2 } from "iconsax-reactjs";
import useAuth from "../../hooks/useAuth";

const ProfileActions = ({ loading = false, onSave, onReset }) => {
  const { logout } = useAuth();
  return (
    <div
      className='
        flex
        flex-col
        gap-3

        rounded-2xl
        border
        border-base-300

        bg-base-100/40

        p-4

        backdrop-blur-xl

        sm:flex-row
        sm:justify-end
      '>
      <button
        type='button'
        onClick={onReset}
        disabled={loading}
        className='
          btn
          btn-outline
        '>
        <Refresh2 size={18} />
        بازنشانی تغییرات
      </button>

      <button
        type='button'
        onClick={onSave}
        disabled={loading}
        className='
          btn
          btn-primary
        '>
        {loading ?
          <span className='loading loading-spinner loading-sm' />
        : <Save2 size={18} />}
        ذخیره پروفایل
      </button>

      <button
        type='button'
        onClick={logout}
        disabled={loading}
        className='
          btn
          btn-error
          btn-outline
        '>
        <Logout size={18} />
        خروج از حساب
      </button>
    </div>
  );
};

export default ProfileActions;
