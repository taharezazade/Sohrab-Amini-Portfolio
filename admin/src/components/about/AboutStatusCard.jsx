/** @format */

import { TickCircle, Image, Clock, StatusUp } from "iconsax-reactjs";

const AboutStatusCard = () => {
  const statusItems = [
    {
      id: 1,
      title: "وضعیت نمایش",
      value: "فعال",
      icon: StatusUp,
      badge: "success",
    },
    {
      id: 2,
      title: "تصویر پروفایل",
      value: "آپلود شده",
      icon: Image,
      badge: "success",
    },
    {
      id: 3,
      title: "آخرین بروزرسانی",
      value: "امروز",
      icon: Clock,
      badge: "primary",
    },
  ];

  return (
    <div
      className='
        card
        bg-base-100
        border
        border-base-300
        shadow-sm
      '>
      <div
        className='
          card-body
          gap-5
        '>
        {/* Header */}
        <div
          className='
            flex
            items-center
            gap-3
          '>
          <div
            className='
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              bg-primary/10
              text-primary
            '>
            <TickCircle size={22} variant='Bulk' />
          </div>

          <div>
            <h2
              className='
                font-bold
                text-lg
              '>
              وضعیت About
            </h2>

            <p
              className='
                text-sm
                text-base-content/60
              '>
              بررسی وضعیت اطلاعات بخش درباره من
            </p>
          </div>
        </div>

        {/* Status List */}
        <div
          className='
            space-y-3
          '>
          {statusItems.map(({ id, title, value, icon: Icon, badge }) => (
            <div
              key={id}
              className='
                    flex
                    items-center
                    justify-between
                    gap-3
                    p-3
                    rounded-xl
                    bg-base-200
                  '>
              <div
                className='
                      flex
                      items-center
                      gap-3
                    '>
                <Icon size={20} className='text-primary' variant='Bulk' />

                <span
                  className='
                        text-sm
                        font-medium
                      '>
                  {title}
                </span>
              </div>

              <span
                className={`
                      badge
                      badge-${badge}
                    `}>
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Ready State */}
        <div
          className='
            alert
            alert-success
            mt-2
          '>
          <TickCircle size={20} />

          <span
            className='
              text-sm
            '>
            اطلاعات برای ذخیره آماده است
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutStatusCard;
