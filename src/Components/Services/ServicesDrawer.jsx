/** @format */

import {
  CloseCircle,
  TickCircle,
  Code1,
  MonitorMobbile,
} from "iconsax-reactjs";

import { getServiceIcon } from "./service.icons";

function ServicesDrawer({ service, isOpen, onClose }) {
  if (!service || !isOpen) {
    return null;
  }

  const Icon = getServiceIcon(service.icon);

  const features = Array.isArray(service.features) ? service.features : [];

  const technologies =
    Array.isArray(service.technologies) ? service.technologies : [];

  return (
    <>
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

      <aside
        className='
          fixed
          right-0
          top-0
          z-[9999]
          h-screen
          w-full
          overflow-y-auto
          border-l
          border-base-300
          bg-base-100
          shadow-2xl
          sm:w-[540px]
          lg:w-[620px]
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
                text-primary
              '>
              <Icon size={32} variant='Bulk' />
            </div>

            <div>
              <h2 className='text-xl font-black'>{service.title}</h2>

              {service.category && (
                <p className='text-sm text-base-content/60'>
                  {service.category}
                </p>
              )}
            </div>
          </div>

          <button
            type='button'
            onClick={onClose}
            className='btn btn-circle btn-ghost'>
            <CloseCircle variant='Bulk' />
          </button>
        </div>

        {/* Content */}

        <div className='space-y-10 p-7'>
          {/* Description */}

          <section>
            <h3 className='mb-4 text-lg font-bold'>معرفی سرویس</h3>

            <p className='leading-8 text-base-content/70'>
              {service.description}
            </p>
          </section>

          {/* Features */}

          {features.length > 0 && (
            <section>
              <h3 className='mb-5 text-lg font-bold'>امکانات این سرویس</h3>

              <div className='space-y-4'>
                {features.map((item, index) => (
                  <div
                    key={`${service.id}-feature-${index}`}
                    className='flex items-start gap-3'>
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
          )}

          {/* Technologies */}

          {technologies.length > 0 && (
            <section>
              <h3 className='mb-5 text-lg font-bold'>
                تکنولوژی‌های استفاده شده
              </h3>

              <div className='flex flex-wrap gap-3'>
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className='
                        badge
                        badge-primary
                        badge-outline
                        badge-lg
                      '>
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Benefits */}

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

                <p className='mt-2 text-sm leading-7 text-base-content/70'>
                  ساختار تمیز، قابل توسعه و مطابق استانداردهای روز.
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

                <p className='mt-2 text-sm leading-7 text-base-content/70'>
                  سازگار با موبایل، تبلت و نمایشگرهای بزرگ.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}

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
              type='button'
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
