/** @format */

import { motion } from "framer-motion";

const ServiceSkeleton = ({ count = 6 }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      className='grid gap-6 md:grid-cols-2 2xl:grid-cols-3'>
      {[...Array(count)].map((_, index) => (
        <div
          key={index}
          className='card bg-base-100 border-base-300 border shadow-sm'>
          <div className='card-body'>
            {/* Header Skeleton */}
            <div className='flex items-start justify-between'>
              <div className='flex items-center gap-4'>
                <div className='skeleton h-14 w-14 rounded-2xl' />

                <div className='space-y-2'>
                  <div className='skeleton h-5 w-32' />

                  <div className='skeleton h-5 w-20 rounded-full' />
                </div>
              </div>

              <div className='skeleton h-8 w-8 rounded-full' />
            </div>

            {/* Content Skeleton */}
            <div className='mt-6 space-y-3'>
              <div className='skeleton h-4 w-full' />

              <div className='skeleton h-4 w-11/12' />

              <div className='skeleton h-4 w-3/4' />
            </div>

            {/* Footer Skeleton */}
            <div className='border-base-300 mt-6 flex justify-between border-t pt-5'>
              <div className='skeleton h-4 w-24' />

              <div className='flex gap-2'>
                <div className='skeleton h-8 w-20 rounded-lg' />

                <div className='skeleton h-8 w-16 rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ServiceSkeleton;
