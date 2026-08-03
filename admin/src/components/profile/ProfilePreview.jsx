/** @format */

import { Profile, Sms, Call, UserTag } from "iconsax-reactjs";

const ProfilePreview = ({ data = {} }) => {
  const image = data.preview || data.image;

  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-sm font-black'>پیش‌نمایش پروفایل</h3>

        <p className='mt-1 text-xs text-base-content/60'>
          تغییرات قبل از ذخیره در این بخش نمایش داده می‌شوند.
        </p>
      </div>

      <div className='rounded-2xl border border-base-300 bg-base-100/40 p-5 backdrop-blur-xl'>
        <div className='flex flex-col items-center'>
          <div className='mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-base-300 bg-base-200'>
            {image ?
              <img
                src={image}
                alt={data.displayName}
                className='h-full w-full object-cover'
              />
            : <Profile
                size={56}
                variant='Bulk'
                className='text-base-content/30'
              />
            }
          </div>

          <h2 className='text-lg font-black'>
            {data.displayName || "نام نمایشی"}
          </h2>

          <p className='mt-1 text-sm text-base-content/60'>
            {`${data.firstName || ""} ${data.lastName || ""}`.trim() ||
              "نام و نام خانوادگی"}
          </p>
        </div>

        <div className='mt-6 space-y-3'>
          <div className='flex items-center gap-3'>
            <UserTag size={18} className='text-primary' />

            <span className='text-sm'>{data.username || "-"}</span>
          </div>

          <div className='flex items-center gap-3'>
            <Sms size={18} className='text-primary' />

            <span className='text-sm break-all'>{data.email || "-"}</span>
          </div>

          <div className='flex items-center gap-3'>
            <Call size={18} className='text-primary' />

            <span className='text-sm'>{data.phone || "-"}</span>
          </div>
        </div>

        <div className='mt-6 rounded-xl bg-base-200/60 p-3'>
          <p className='text-xs text-base-content/60'>درباره مدیر</p>

          <p className='mt-2 text-sm leading-6'>
            {data.bio || "توضیحی ثبت نشده است."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
