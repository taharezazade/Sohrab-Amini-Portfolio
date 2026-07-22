/** @format */

import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  ArrowLeft2,
  CallCalling,
  Code1,
  ProgrammingArrow,
  ShieldSecurity,
  Speedometer,
  TickCircle,
} from "iconsax-reactjs";

const benefits = [
  "طراحی کاملاً اختصاصی بر اساس نیاز پروژه",
  "کدنویسی استاندارد و قابل توسعه",
  "پشتیبانی واقعی پس از تحویل پروژه",
  "بهینه‌سازی سرعت و Core Web Vitals",
  "امنیت حرفه‌ای وردپرس",
  "توسعه Backend با PHP و MySQL",
];

const skill = [
  {
    icon: Code1,
    title: "طراحی قالب اختصاصی",
  },
  {
    icon: ProgrammingArrow,
    title: "توسعه افزونه وردپرس",
  },
  {
    icon: Speedometer,
    title: "بهینه‌سازی سرعت",
  },
  {
    icon: ShieldSecurity,
    title: "امنیت وردپرس",
  },
];

function ServiceCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
      }}
      className='mt-28'>
      <div
        className='
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-base-300
          bg-base-100/60
          backdrop-blur-xl
        '>
        {/* ================= Background Glow ================= */}

        <div
          className='
            absolute
            -left-40
            -top-40
            h-80
            w-80
            rounded-full
            bg-primary/10
            blur-[140px]
          '
        />

        <div
          className='
            absolute
            -bottom-48
            -right-40
            h-[26rem]
            w-[26rem]
            rounded-full
            bg-secondary/10
            blur-[150px]
          '
        />

        <div
          className='
            relative
            z-10

            grid
            gap-10
            lg:grid-cols-[1.15fr_.85fr]

            p-6
            sm:p-8
            lg:p-10
            xl:p-12
          '>
          {/* ================================================= */}
          {/* Left Side */}
          {/* ================================================= */}

          <div className='flex flex-col justify-center'>
            {/* Badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}>
              <span
                className='
                  badge
                  badge-primary
                  rounded-full
                  px-4
                  py-3
                  font-medium
                '>
                همکاری حرفه‌ای
              </span>
            </motion.div>

            {/* Title */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='mt-6'>
              <h2
                className='
                  max-w-3xl

                  text-3xl
                  md:text-4xl

                  font-black
                  leading-normal
                '>
                آماده ساخت یک وب‌سایت سریع،
                <span className='text-primary'> امن و کاملاً اختصاصی</span>
                <br />
                برای کسب‌وکار شما هستم.
              </h2>

              <p
                className='
                  mt-6
                  max-w-2xl

                  leading-8

                  text-base-content/70
                '>
                از طراحی قالب‌های اختصاصی وردپرس گرفته تا توسعه افزونه،
                برنامه‌نویسی Backend با PHP، افزایش امنیت، بهینه‌سازی سرعت،
                مدیریت پایگاه داده و توسعه سیستم‌های سفارشی، تمامی پروژه‌ها با
                رعایت استانداردهای روز و تمرکز بر کیفیت، عملکرد و قابلیت توسعه
                پیاده‌سازی می‌شوند.
              </p>
            </motion.div>

            {/* Benefits */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='
                mt-10

                grid
                gap-4

                sm:grid-cols-2
              '>
              {benefits.map((item) => (
                <div
                  key={item}
                  className='
                    flex
                    items-start
                    gap-3
                  '>
                  <TickCircle
                    size={20}
                    variant='Bold'
                    className='
                      mt-1
                      shrink-0
                      text-success
                    '
                  />

                  <span
                    className='
                      leading-7
                      text-base-content/80
                    '>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className='
                mt-12

                flex
                flex-col
                gap-4

                sm:flex-row
              '>
              <Link
                to='contact'
                smooth
                duration={700}
                offset={-90}
                className='
                  btn
                  btn-primary

                  rounded-full

                  px-8

                  shadow-lg
                  shadow-primary/20

                  hover:scale-[1.03]
                '>
                <CallCalling size={20} variant='Bulk' />
                شروع همکاری
              </Link>

              <Link
                to='portfolio'
                smooth
                duration={700}
                offset={-90}
                className='
                  btn
                  btn-outline

                  rounded-full

                  px-8

                  hover:bg-primary
                  hover:text-primary-content
                '>
                مشاهده نمونه‌کارها
                <ArrowLeft2 size={18} />
              </Link>
            </motion.div>
          </div>

          {/* ================================================= */}
          {/* Right Side */}
          {/* ================================================= */}

          <div className='relative min-h-[520px]'>
            {/* ================= Right ================= */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='relative'>
              <div
                className='
      relative
      overflow-hidden
      rounded-[30px]
      border
      border-base-300
      bg-base-100/70
      p-6
      backdrop-blur-xl
    '>
                {/* Glow */}

                <div className='absolute -top-20 -right-20 h-52 w-52 rounded-full bg-primary/10 blur-[90px]' />
                <div className='absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-secondary/10 blur-[90px]' />

                {/* Header */}

                <div className='relative z-10 flex items-start justify-between gap-5'>
                  <div>
                    <span className='badge badge-primary rounded-full'>
                      WordPress Expert
                    </span>

                    <h3 className='mt-4 text-2xl font-black'>
                      توسعه‌دهنده حرفه‌ای وردپرس
                    </h3>

                    <p className='mt-2 text-sm leading-7 text-base-content/70'>
                      توسعه قالب و افزونه اختصاصی، سیستم‌های PHP و بهینه‌سازی
                      عملکرد وب‌سایت.
                    </p>
                  </div>

                  <div
                    className='
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-primary/10
        '>
                    <ProgrammingArrow
                      variant='Bulk'
                      size={34}
                      className='text-primary'
                    />
                  </div>
                </div>

                {/* Divider */}

                <div className='my-7 h-px bg-base-300/60' />

                {/* Statistics */}

                <div className='grid grid-cols-2 gap-4'>
                  {[
                    {
                      value: "PHP",
                      title: "Backend",
                    },
                    {
                      value: "WP",
                      title: "WordPress",
                    },
                    {
                      value: "MySQL",
                      title: "Database",
                    },
                    {
                      value: "REST",
                      title: "API",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className='
            rounded-2xl
            border
            border-base-300
            bg-base-100/60
            p-4
          '>
                      <h4 className='text-xl font-black text-primary'>
                        {item.value}
                      </h4>

                      <p className='mt-1 text-xs text-base-content/60'>
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Skills */}

                <div className='mt-8'>
                  <h4 className='mb-4 text-sm font-bold text-base-content/50'>
                    خدمات تخصصی
                  </h4>

                  <div className='space-y-3'>
                    {skill.map(({ icon: Icon, title }) => (
                      <div
                        key={title}
                        className='
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-base-300
              bg-base-100/50
              p-4
              transition-all
              duration-300
              hover:border-primary/40
              hover:bg-primary/5
            '>
                        <div
                          className='
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-primary/10
              '>
                          <Icon
                            variant='Bulk'
                            size={24}
                            className='text-primary'
                          />
                        </div>

                        <div className='flex-1'>
                          <p className='font-semibold'>{title}</p>

                          <p className='text-xs text-base-content/60'>
                            توسعه کاملاً اختصاصی و استاندارد
                          </p>
                        </div>

                        <TickCircle
                          size={18}
                          variant='Bold'
                          className='text-success'
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}

                <div className='mt-8'>
                  <h4 className='mb-4 text-sm font-bold text-base-content/50'>
                    Tech Stack
                  </h4>

                  <div className='flex flex-wrap gap-2'>
                    {[
                      "PHP",
                      "WordPress",
                      "MySQL",
                      "REST API",
                      "Git",
                      "Apache",
                      "Nginx",
                      "JavaScript",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className='
              badge
              badge-outline
              rounded-full
            '>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}

                <div
                  className='
        mt-8
        flex
        items-center
        justify-between
        rounded-2xl
        border
        border-primary/15
        bg-primary/5
        px-5
        py-4
      '>
                  <div>
                    <p className='font-bold'>آماده شروع پروژه</p>

                    <p className='text-xs text-base-content/60'>
                      پاسخگویی سریع و همکاری مستقیم
                    </p>
                  </div>

                  <div className='flex items-center gap-2'>
                    <span className='h-3 w-3 rounded-full bg-success animate-pulse' />

                    <span className='text-sm font-semibold'>Online</span>
                  </div>
                </div>
              </div>
              {/* ================= Hover Glow ================= */}

              <div
                className='
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        '>
                <div
                  className='
            absolute
            -top-40
            -left-40
            h-80
            w-80
            rounded-full
            bg-primary/10
            blur-[120px]
            opacity-70
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:opacity-100
          '
                />

                <div
                  className='
            absolute
            -bottom-44
            -right-44
            h-96
            w-96
            rounded-full
            bg-secondary/10
            blur-[140px]
            opacity-60
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:opacity-100
          '
                />
              </div>

              {/* Grid Background */}

              <div
                className='
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:34px_34px]
        '
              />

              {/* Border Glow */}

              <div
                className='
          pointer-events-none
          absolute
          inset-0
          rounded-[34px]
          ring-1
          ring-primary/0
          transition-all
          duration-500
          group-hover:ring-primary/20
        '
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ServiceCTA;
