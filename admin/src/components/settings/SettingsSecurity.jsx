/** @format */

import Input from "../ui/Input";

const SettingsSecurity = ({ values = {}, loading = false, onChange }) => {
  return (
    <div className='space-y-5'>
      <div>
        <h3 className='text-sm font-black'>امنیت پنل مدیریت</h3>
        <p className='mt-1 text-xs text-base-content/60'>
          تنظیمات امنیتی و تغییر رمز عبور مدیر.
        </p>
      </div>

      <div className='rounded-2xl border border-base-300 bg-base-100/40 p-4 backdrop-blur-xl'>
        <div className='flex items-center justify-between'>
          <div>
            <h4 className='text-sm font-bold'>حالت تعمیرات</h4>
            <p className='mt-1 text-xs text-base-content/60'>
              در زمان بروزرسانی سایت، صفحه تعمیرات به کاربران نمایش داده می‌شود.
            </p>
          </div>

          <input
            type='checkbox'
            name='maintenanceMode'
            checked={values.maintenanceMode}
            onChange={onChange}
            className='toggle toggle-primary'
          />
        </div>
      </div>

      <div className='rounded-2xl border border-base-300 bg-base-100/40 p-4 backdrop-blur-xl'>
        <h4 className='mb-4 text-sm font-bold'>تغییر رمز عبور</h4>

        <div className='grid gap-4 md:grid-cols-3'>
          <Input
            label='رمز عبور فعلی'
            name='currentPassword'
            type='password'
            placeholder='********'
            value={values.currentPassword}
            onChange={onChange}
            disabled={loading}
          />

          <Input
            label='رمز عبور جدید'
            name='newPassword'
            type='password'
            placeholder='********'
            value={values.newPassword}
            onChange={onChange}
            disabled={loading}
          />

          <Input
            label='تکرار رمز عبور'
            name='confirmPassword'
            type='password'
            placeholder='********'
            value={values.confirmPassword}
            onChange={onChange}
            disabled={loading}
          />
        </div>
      </div>

      <div className='rounded-2xl border border-base-300 bg-base-100/40 p-4 backdrop-blur-xl'>
        <h4 className='mb-4 text-sm font-bold'>وضعیت امنیت</h4>

        <div className='grid gap-3 md:grid-cols-3'>
          <div className='rounded-xl bg-success/10 p-3'>
            <p className='text-xs text-base-content/60'>وضعیت پنل</p>

            <p className='mt-1 text-sm font-bold text-success'>فعال</p>
          </div>

          <div className='rounded-xl bg-info/10 p-3'>
            <p className='text-xs text-base-content/60'>آخرین ورود</p>

            <p className='mt-1 text-sm font-bold'>امروز</p>
          </div>

          <div className='rounded-xl bg-primary/10 p-3'>
            <p className='text-xs text-base-content/60'>اتصال API</p>

            <p className='mt-1 text-sm font-bold text-primary'>متصل</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSecurity;
