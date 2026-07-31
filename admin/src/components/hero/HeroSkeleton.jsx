/** @format */

import { motion } from "framer-motion";

const HeroSkeleton = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className='space-y-6'>
      {/* Header */}

      <div className='rounded-3xl border border-base-300 bg-base-100 p-6'>
        <div className='skeleton-loading h-8 w-56 rounded-xl' />

        <div className='mt-4 skeleton-loading h-5 w-80 rounded-lg max-w-full' />
      </div>

      {/* Preview */}

      <div className='rounded-3xl border border-base-300 bg-base-100 p-6'>
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <div className='skeleton-loading h-7 w-48 rounded-lg' />

            <div className='mt-3 skeleton-loading h-4 w-64 rounded-lg max-w-full' />
          </div>

          <div className='skeleton-loading h-10 w-24 rounded-xl' />
        </div>

        <div className='grid gap-6 xl:grid-cols-[340px_1fr]'>
          <div className='skeleton-loading aspect-[4/5] rounded-2xl' />

          <div className='space-y-5'>
            <div className='rounded-2xl border border-base-300 p-5'>
              <div className='skeleton-loading h-5 w-24 rounded-lg' />

              <div className='mt-4 skeleton-loading h-9 w-3/4 rounded-xl' />
            </div>

            <div className='rounded-2xl border border-base-300 p-5'>
              <div className='skeleton-loading h-5 w-24 rounded-lg' />

              <div className='mt-4 skeleton-loading h-6 w-full rounded-xl' />
            </div>

            <div className='rounded-2xl border border-base-300 p-5'>
              <div className='skeleton-loading h-5 w-24 rounded-lg' />

              <div className='mt-4 space-y-3'>
                <div className='skeleton-loading h-4 rounded-lg' />

                <div className='skeleton-loading h-4 rounded-lg' />

                <div className='skeleton-loading h-4 w-5/6 rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}

      <div className='rounded-3xl border border-base-300 bg-base-100 p-6'>
        <div className='mb-8 flex items-center justify-between'>
          <div>
            <div className='skeleton-loading h-7 w-52 rounded-lg' />

            <div className='mt-3 skeleton-loading h-4 w-72 rounded-lg max-w-full' />
          </div>

          <div className='skeleton-loading h-11 w-40 rounded-2xl' />
        </div>

        <div className='grid gap-8 xl:grid-cols-[1fr_320px]'>
          <div className='space-y-6'>
            {[1, 2, 3, 4].map((item) => (
              <div key={item}>
                <div className='mb-3 skeleton-loading h-4 w-24 rounded-lg' />

                <div className='skeleton-loading h-14 w-full rounded-2xl' />
              </div>
            ))}

            <div>
              <div className='mb-3 skeleton-loading h-4 w-28 rounded-lg' />

              <div className='skeleton-loading h-40 w-full rounded-2xl' />
            </div>
          </div>

          <div className='space-y-5'>
            <div className='skeleton-loading h-56 rounded-2xl' />

            <div className='skeleton-loading h-56 rounded-2xl' />

            <div className='space-y-3'>
              <div className='skeleton-loading h-12 rounded-2xl' />

              <div className='skeleton-loading h-12 rounded-2xl' />

              <div className='skeleton-loading h-12 rounded-2xl' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSkeleton;
