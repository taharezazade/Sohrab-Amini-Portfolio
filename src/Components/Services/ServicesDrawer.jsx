/** @format */

import {
  CloseCircle,
  TickCircle,
  Code1,
  MonitorMobbile,
} from "iconsax-reactjs";

function ServicesDrawer({ service, isOpen, onClose }) {
  if (!service || !isOpen) return null;

  const Icon = service.icon;

  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className='
          fixed
          inset-0
          z-[9998]
          bg-black/40
          backdrop-blur-sm
        '
      />

      {/* Drawer */}

      <aside
        className='
          fixed
          top-0
          right-0
          z-[9999]

          h-screen
          w-full
          sm:w-[540px]
          lg:w-[620px]

          overflow-y-auto

          border-l
          border-base-300

          bg-base-100
          shadow-2xl
        '>
        {/* Header */}

        <div
          className='
            sticky
            top-0
            z-20

            flex
            items-center
            justify-between

            border-b
            border-base-300

            bg-base-100/90
            px-7
            py-5

            backdrop-blur-xl
          '>
          <div className='flex items-center gap-4'>
            <div
              className='
                rounded-2xl
                bg-primary/10
                p-3
              '>
              <Icon size={32} variant='Bulk' className='text-primary' />
            </div>

            <div>
              <h2 className='text-xl font-black'>{service.title}</h2>

              <p className='text-sm text-base-content/60'>{service.category}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className='
              btn
              btn-circle
              btn-ghost
            '>
            <CloseCircle variant='Bulk' />
          </button>
        </div>

        {/* Content */}

        <div className='space-y-10 p-7'>
          <section>
            <h3 className='mb-4 text-lg font-bold'>معرفی سرویس</h3>

            <p className='leading-8 text-base-content/70'>
              {service.description}
            </p>
          </section>

          <section>
            <h3 className='mb-5 text-lg font-bold'>امکانات این سرویس</h3>

            <div className='space-y-4'>
              {service.features.map((item) => (
                <div key={item} className='flex items-start gap-3'>
                  <TickCircle
                    size={22}
                    variant='Bold'
                    className='mt-1 text-success'
                  />

                  <span className='leading-7'>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className='mb-5 text-lg font-bold'>تکنولوژی‌های استفاده شده</h3>

            <div className='flex flex-wrap gap-3'>
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className='
                    badge
                    badge-primary
                    badge-outline
                    badge-lg
                  '>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className='mb-5 text-lg font-bold'>مزایای همکاری</h3>

            <div className='grid gap-4'>
              <div
                className='
                  rounded-2xl
                  border
                  border-base-300
                  p-5
                '>
                <Code1 variant='Bulk' className='mb-3 text-primary' />

                <h4 className='font-bold'>کدنویسی استاندارد</h4>

                <p className='mt-2 text-sm text-base-content/70'>
                  ساختار تمیز، قابل توسعه و مطابق استانداردهای روز PHP و
                  WordPress.
                </p>
              </div>

              <div
                className='
                  rounded-2xl
                  border
                  border-base-300
                  p-5
                '>
                <MonitorMobbile variant='Bulk' className='mb-3 text-primary' />

                <h4 className='font-bold'>کاملاً ریسپانسیو</h4>

                <p className='mt-2 text-sm text-base-content/70'>
                  سازگار با موبایل، تبلت و نمایشگرهای بزرگ.
                </p>
              </div>
            </div>
          </section>

          <section
            className='
              rounded-3xl
              bg-primary/10
              p-6
              text-center
            '>
            <h3 className='text-xl font-black'>آماده شروع همکاری هستید؟</h3>

            <p className='mt-3 text-base-content/70'>
              برای دریافت مشاوره یا ثبت پروژه، کافی است با من در ارتباط باشید.
            </p>

            <button
              className='
                btn
                btn-primary
                mt-6
                rounded-full
                px-8
              '>
              ثبت درخواست پروژه
            </button>
          </section>
        </div>
      </aside>
    </>
  );
}

export default ServicesDrawer;
