/** @format */

import Input from "../ui/Input";
import { ShieldTick, Lock, Refresh } from "iconsax-reactjs";

const ProfileSecurity = ({
  values = {},
  loading = false,
  onChange,
  onSubmit,
}) => {
  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-black'>امنیت حساب</h3>

        <p className='mt-1 text-xs text-base-content/60'>
          مدیریت رمز عبور و وضعیت امنیتی حساب مدیر.
        </p>
      </div>

      <div
        className='
          rounded-2xl
          border
          border-base-300
          bg-base-100/40
          p-4
          backdrop-blur-xl
        '>
        <div
          className='
            mb-4
            flex
            items-center
            gap-3
            rounded-xl
            bg-success/10
            p-3
          '>
          <ShieldTick size={24} variant='Bulk' className='text-success' />

          <div>
            <p className='text-sm font-bold'>حساب امن است</p>

            <p className='text-xs text-base-content/60'>
              آخرین بررسی امنیتی موفق بوده است.
            </p>
          </div>
        </div>

        <div className='space-y-4'>
          <Input
            label='رمز عبور فعلی'
            name='currentPassword'
            type='password'
            placeholder='********'
            value={values.currentPassword || ""}
            onChange={onChange}
            disabled={loading}
          />

          <Input
            label='رمز عبور جدید'
            name='newPassword'
            type='password'
            placeholder='********'
            value={values.newPassword || ""}
            onChange={onChange}
            disabled={loading}
          />

          <Input
            label='تکرار رمز عبور جدید'
            name='confirmPassword'
            type='password'
            placeholder='********'
            value={values.confirmPassword || ""}
            onChange={onChange}
            disabled={loading}
          />

          <button
            type='button'
            onClick={onSubmit}
            disabled={loading}
            className='
              btn
              btn-primary
              w-full
            '>
            {loading ?
              <span className='loading loading-spinner loading-sm' />
            : <Lock size={18} />}
            تغییر رمز عبور
          </button>
        </div>
      </div>

      <div
        className='
          rounded-2xl
          border
          border-base-300
          bg-base-100/40
          p-4
          backdrop-blur-xl
        '>
        <div className='flex items-center gap-3'>
          <Refresh size={22} variant='Bulk' className='text-primary' />

          <div>
            <p className='text-sm font-bold'>مدیریت نشست‌ها</p>

            <p className='text-xs text-base-content/60'>
              در آینده امکان خروج از تمام دستگاه‌ها اضافه می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSecurity;
