/** @format */

import { Sms, Call, Instagram, Link } from "iconsax-reactjs";
import { VscGithubInverted } from "react-icons/vsc";

const SettingsPreview = ({ data = {} }) => {
  return (
    <div
      className='
        space-y-4
      '>
      <div>
        <h3
          className='
            text-sm
            font-black
          '>
          پیش‌نمایش اطلاعات
        </h3>

        <p
          className='
            mt-1
            text-xs
            text-base-content/60
          '>
          تغییرات قبل از ذخیره نمایش داده می‌شوند.
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
            space-y-2
          '>
          <h4
            className='
              text-base
              font-black
            '>
            {data.siteName || "نام سایت"}
          </h4>

          <p
            className='
              text-sm
              text-base-content/70
            '>
            {data.siteTitle || "عنوان سایت"}
          </p>

          <p
            className='
              line-clamp-3
              text-xs
              text-base-content/60
            '>
            {data.description || "توضیحات سایت در این قسمت نمایش داده می‌شود."}
          </p>
        </div>
      </div>

      <div
        className='
          space-y-2
        '>
        <div
          className='
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-base-300
            bg-base-100/40
            px-3
            py-2
            backdrop-blur-xl
          '>
          <Call size={16} className='text-primary' />

          <span
            className='
              text-sm
            '>
            {data.phone || "-"}
          </span>
        </div>

        <div
          className='
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-base-300
            bg-base-100/40
            px-3
            py-2
            backdrop-blur-xl
          '>
          <Sms size={16} className='text-primary' />

          <span
            className='
              text-sm
            '>
            {data.email || "-"}
          </span>
        </div>
      </div>

      <div
        className='
          space-y-2
        '>
        {[
          {
            icon: VscGithubInverted,
            value: data.github,
          },
          {
            icon: Instagram,
            value: data.instagram,
          },
          {
            icon: Link,
            value: data.linkedin,
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className='
                flex
                items-center
                gap-2
                text-sm
                text-base-content/70
              '>
              <Icon size={16} />

              <span>{item.value || "ثبت نشده"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsPreview;
