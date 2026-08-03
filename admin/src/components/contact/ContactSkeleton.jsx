/** @format */

const ContactSkeleton = () => {
  return (
    <div
      className='
        min-h-screen
        space-y-6
        p-4
        md:p-6
      '>
      {/* Header Skeleton */}

      <div
        className='
          rounded-3xl
          border
          border-base-300
          bg-base-100/50
          p-5
          shadow-sm
        '>
        <div
          className='
            flex
            flex-col
            gap-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          '>
          <div className='flex items-center gap-4'>
            <div
              className='
                skeleton
                h-14
                w-14
                rounded-2xl
              '
            />

            <div className='space-y-2'>
              <div
                className='
                  skeleton
                  h-5
                  w-48
                '
              />

              <div
                className='
                  skeleton
                  h-3
                  w-64
                '
              />
            </div>
          </div>

          <div className='flex gap-3'>
            <div
              className='
                skeleton
                h-10
                w-32
                rounded-xl
              '
            />

            <div
              className='
                skeleton
                h-10
                w-32
                rounded-xl
              '
            />

            <div
              className='
                skeleton
                h-10
                w-36
                rounded-xl
              '
            />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}

      <div
        className='
          grid
          gap-6

          xl:grid-cols-5
        '>
        {/* Form */}

        <div
          className='
            rounded-3xl
            border
            border-base-300
            bg-base-100
            p-6

            xl:col-span-3
          '>
          <div className='mb-6 space-y-2'>
            <div
              className='
                skeleton
                h-5
                w-40
              '
            />

            <div
              className='
                skeleton
                h-3
                w-72
              '
            />
          </div>

          <div className='space-y-5'>
            <div className='space-y-2'>
              <div
                className='
                  skeleton
                  h-4
                  w-28
                '
              />

              <div
                className='
                  skeleton
                  h-12
                  w-full
                  rounded-xl
                '
              />
            </div>

            <div className='space-y-2'>
              <div
                className='
                  skeleton
                  h-4
                  w-28
                '
              />

              <div
                className='
                  skeleton
                  h-12
                  w-full
                  rounded-xl
                '
              />
            </div>

            {/* Upload */}

            <div
              className='
                skeleton
                h-44
                w-full
                rounded-2xl
              '
            />

            <div className='flex justify-end'>
              <div
                className='
                  skeleton
                  h-11
                  w-36
                  rounded-xl
                '
              />
            </div>
          </div>
        </div>

        {/* Preview */}

        <div
          className='
            rounded-3xl
            border
            border-base-300
            bg-base-100
            p-6

            xl:col-span-2
          '>
          <div className='mb-5 space-y-2'>
            <div
              className='
                skeleton
                h-5
                w-32
              '
            />

            <div
              className='
                skeleton
                h-3
                w-48
              '
            />
          </div>

          <div className='space-y-5'>
            <div
              className='
                skeleton
                h-64
                w-full
                rounded-2xl
              '
            />

            <div
              className='
                skeleton
                h-20
                w-full
                rounded-2xl
              '
            />

            <div
              className='
                skeleton
                h-20
                w-full
                rounded-2xl
              '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;
