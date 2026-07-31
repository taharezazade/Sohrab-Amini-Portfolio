/** @format */

import { User, Code1, TickCircle } from "iconsax-reactjs";

const AboutPreview = () => {
  return (
    <div
      className='
        card
        bg-base-100
        border
        border-base-300
        shadow-sm
      '>
      <div className='card-body'>
        {/* Header */}
        <div
          className='
            flex
            items-center
            gap-3
            mb-5
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
            <User size={22} variant='Bulk' />
          </div>

          <div>
            <h2
              className='
                font-bold
                text-lg
              '>
              پیش‌نمایش
            </h2>

            <p
              className='
                text-sm
                text-base-content/60
              '>
              نمایش نتیجه نهایی About
            </p>
          </div>
        </div>

        {/* Preview Card */}
        <div
          className='
            rounded-xl
            border
            border-base-300
            overflow-hidden
            bg-base-200
          '>
          {/* Image */}
          <div
            className='
              h-44
              bg-base-300
              flex
              items-center
              justify-center
            '>
            <div
              className='
                w-24
                h-24
                rounded-full
                bg-base-100
                flex
                items-center
                justify-center
                border
                border-base-300
              '>
              <User size={42} variant='Bulk' className='text-primary' />
            </div>
          </div>

          {/* Content */}
          <div
            className='
              p-5
              space-y-4
            '>
            {/* Status */}
            <div
              className='
                flex
                items-center
                justify-between
              '>
              <span
                className='
                  badge
                  badge-success
                  gap-1
                '>
                <TickCircle size={14} />
                فعال
              </span>
            </div>

            {/* Name */}
            <div>
              <h3
                className='
                  text-xl
                  font-bold
                '>
                سهراب امینی
              </h3>

              <p
                className='
                  text-sm
                  text-base-content/60
                  mt-1
                '>
                توسعه‌دهنده وردپرس
              </p>
            </div>

            {/* Description */}
            <p
              className='
                text-sm
                leading-7
                text-base-content/70
              '>
              طراحی و توسعه سایت‌های حرفه‌ای، ساخت قالب‌های اختصاصی وردپرس،
              بهینه‌سازی سرعت و توسعه راهکارهای سفارشی وب.
            </p>

            {/* Technologies */}
            <div
              className='
                flex
                flex-wrap
                gap-2
                pt-2
              '>
              {["PHP", "WordPress", "JavaScript", "React"].map((item) => (
                <span
                  key={item}
                  className='
                      badge
                      badge-outline
                    '>
                  <Code1 size={13} />

                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
