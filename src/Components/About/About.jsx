/** @format */

import { motion } from "framer-motion";
import { InfoCircle, Refresh2 } from "iconsax-reactjs";

import AboutGrid from "./AboutGrid";
import useAbout from "@/hooks/useAbout";

function About() {
  const { about, loading, error, refetch } = useAbout();

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <section
        id='about'
        className='
          relative
          overflow-hidden
          py-24
          sm:py-28
          lg:py-32
        '>
        {/* Background glow */}

        <div
          className='
            pointer-events-none
            absolute
            -right-32
            top-20
            h-72
            w-72
            rounded-full
            bg-primary/10
            blur-3xl
          '
        />

        <div
          className='
            pointer-events-none
            absolute
            -left-32
            bottom-0
            h-72
            w-72
            rounded-full
            bg-secondary/10
            blur-3xl
          '
        />

        <div className='container relative mx-auto px-6'>
          <div className='grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]'>
            {/* Content Skeleton */}

            <div className='space-y-6'>
              <div className='skeleton h-7 w-32 rounded-full' />

              <div className='space-y-3'>
                <div className='skeleton h-10 w-full max-w-xl rounded-2xl' />

                <div className='skeleton h-10 w-4/5 max-w-lg rounded-2xl' />
              </div>

              <div className='space-y-2'>
                <div className='skeleton h-4 w-full rounded-lg' />
                <div className='skeleton h-4 w-full rounded-lg' />
                <div className='skeleton h-4 w-11/12 rounded-lg' />
                <div className='skeleton h-4 w-4/5 rounded-lg' />
              </div>

              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                <div className='skeleton h-28 rounded-3xl' />
                <div className='skeleton h-28 rounded-3xl' />
                <div className='skeleton h-28 rounded-3xl' />
              </div>
            </div>

            {/* Info Skeleton */}

            <div className='rounded-[2rem] border border-base-300 bg-base-100/70 p-6 shadow-xl shadow-base-content/5 backdrop-blur-xl'>
              <div className='space-y-4'>
                <div className='skeleton h-20 rounded-2xl' />
                <div className='skeleton h-20 rounded-2xl' />
                <div className='skeleton h-20 rounded-2xl' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     ERROR
  ========================================================= */

  if (error) {
    return (
      <section
        id='about'
        className='
          relative
          overflow-hidden
          py-24
          sm:py-28
          lg:py-32
        '>
        <div
          className='
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-b
            from-error/5
            via-transparent
            to-transparent
          '
        />

        <div className='container relative mx-auto px-6'>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className='
              mx-auto
              max-w-xl
              rounded-[2rem]
              border
              border-error/20
              bg-base-100/80
              p-8
              text-center
              shadow-xl
              shadow-base-content/5
              backdrop-blur-xl
            '>
            <div
              className='
                mx-auto
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-error/10
                text-error
              '>
              <InfoCircle size={26} variant='Bulk' />
            </div>

            <h2 className='text-xl font-black'>
              دریافت اطلاعات درباره من ناموفق بود
            </h2>

            <p className='mt-3 text-sm leading-7 text-base-content/60'>
              در دریافت اطلاعات این بخش مشکلی رخ داده است. لطفاً دوباره تلاش
              کنید.
            </p>

            {typeof refetch === "function" && (
              <button
                type='button'
                onClick={refetch}
                className='
                  btn
                  btn-primary
                  mt-6
                  rounded-2xl
                  px-6
                '>
                <Refresh2 size={18} />
                تلاش مجدد
              </button>
            )}
          </motion.div>
        </div>
      </section>
    );
  }

  /* =========================================================
     EMPTY
  ========================================================= */

  if (!about) {
    return (
      <section
        id='about'
        className='
          relative
          overflow-hidden
          py-24
          sm:py-28
          lg:py-32
        '>
        <div className='container mx-auto px-6'>
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className='
              mx-auto
              max-w-xl
              rounded-[2rem]
              border
              border-base-300
              bg-base-100/70
              p-10
              text-center
              shadow-xl
              shadow-base-content/5
              backdrop-blur-xl
            '>
            <div
              className='
                mx-auto
                mb-5
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary
              '>
              <InfoCircle size={26} variant='Bulk' />
            </div>

            <h2 className='text-xl font-black'>درباره من</h2>

            <p className='mt-3 text-sm leading-7 text-base-content font-medium'>
              اطلاعات این بخش هنوز ثبت نشده است.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  /* =========================================================
     CONTENT
  ========================================================= */

  return (
    <section
      id='about'
      className='
        relative
        overflow-hidden
        py-24
        sm:py-28
        lg:py-32
      '>
      {/* Background */}

      <div
        className='
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-primary/10
          blur-3xl
        '
      />

      <div
        className='
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-96
          w-96
          rounded-full
          bg-secondary/10
          blur-3xl
        '
      />

      <div
        className='
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-base-content/10
          to-transparent
        '
      />

      {/* Content */}

      <div className='container relative mx-auto px-6'>
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}>
          <AboutGrid about={about} />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
