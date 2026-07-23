/** @format */

import { ArrowUp2, CallCalling, Whatsapp, ArrowLeft2 } from "iconsax-reactjs";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className='
        relative
        overflow-hidden
        border-t
        border-base-300/60
        bg-base-100
      '>
      {/* Glow */}

      <div
        className='
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-80
          w-80
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        '
      />

      <div
        className='
          container
          relative
          z-10
          mx-auto
          px-4
          py-10
        '>
        <div
          className='
            grid
            gap-10
            lg:grid-cols-3
          '>
          {/* About */}

          <div>
            <h3
              className='
                text-3xl
                font-black
              '>
              سهراب امینی
            </h3>

            <p
              className='
                mt-5
                leading-8
                text-base-content/70
              '>
              توسعه‌دهنده وب و متخصص طراحی و توسعه وب‌سایت‌های مدرن، سریع و قابل
              توسعه با تمرکز بر تجربه کاربری، کیفیت کدنویسی و ارائه راهکارهای
              حرفه‌ای برای کسب‌وکارها.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h4
              className='
                text-xl
                font-black
              '>
              دسترسی سریع
            </h4>

            <div className='mt-2 flex flex-col gap-0'>
              {[
                { title: "خانه", to: "hero" },
                { title: "درباره من", to: "about" },
                { title: "خدمات", to: "services" },
                { title: "نمونه کارها", to: "portfolio" },
                { title: "تماس با من", to: "contact" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  spy
                  duration={700}
                  offset={-110}
                  className='
                    group
                    flex
                    items-center
                    justify-between
                
                    rounded-xl
                
                    px-3
                    py-2
                
                    cursor-pointer
                
                    transition-all
                    duration-300
                
                    hover:bg-primary/10
                    hover:text-primary
                    hover:translate-x-1
                  '>
                  <span className='font-medium'>{item.title}</span>

                  <ArrowLeft2
                    size={18}
                    className='
          opacity-0
          -translate-x-2

          transition-all
          duration-300

          group-hover:opacity-100
          group-hover:translate-x-0
        '
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h4
              className='
                text-xl
                font-black
              '>
              ارتباط مستقیم
            </h4>

            <div className='mt-6 space-y-5'>
              <a
                href='tel:+989123884766'
                className='
                  flex
                  items-center
                  gap-3
                  transition-colors
                  hover:text-primary
                '>
                <CallCalling size={22} variant='Bulk' />
                0912-388-4766
              </a>

              <a
                href='https://wa.me/989123884766'
                target='_blank'
                rel='noopener noreferrer'
                className='
                  flex
                  items-center
                  gap-3
                  transition-colors
                  hover:text-primary
                '>
                <Whatsapp size={22} variant='Bulk' />
                گفت‌وگو در واتساپ
              </a>
            </div>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className='
                btn
                btn-primary
                btn-circle
                mt-8
              '>
              <ArrowUp2 variant='Bold' />
            </button>
          </div>
        </div>

        <div
          className='
            my-10
            h-px
            bg-base-300
          '
        />

        <div
          className='
            flex
            flex-col
            gap-4
            text-center
            text-sm
            text-base-content/60

            lg:flex-row
            lg:items-center
            lg:justify-between
          '>
          <p>
            © {year} تمامی حقوق مادی و معنوی این وب‌سایت، محتوا، طراحی، تصاویر و
            کدنویسی مربوط به برند شخصی سهراب امینی محفوظ است. هرگونه استفاده،
            بازنشر یا کپی‌برداری بدون کسب مجوز کتبی ممنوع است.
          </p>

          <p>
            طراحی و توسعه این وب‌سایت توسط{" "}
            <span className='font-bold text-primary'>طاها رضازاده</span> انجام
            شده است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
