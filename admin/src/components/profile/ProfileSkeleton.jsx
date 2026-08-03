/** @format */

const ProfileSkeleton = () => {
  return (
    <div className='space-y-4'>
      <div
        className='
          rounded-2xl
          border
          border-base-300
          bg-base-100/40
          p-5
          backdrop-blur-xl
        '>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <div
              className='
                skeleton
                h-6
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

          <div
            className='
              skeleton
              h-10
              w-32
              rounded-xl
            '
          />
        </div>
      </div>

      <div
        className='
          grid
          gap-4
          lg:grid-cols-3
        '>
        <div
          className='
            rounded-2xl
            border
            border-base-300
            bg-base-100/40
            p-5
            backdrop-blur-xl
          '>
          <div className='flex flex-col items-center gap-4'>
            <div
              className='
                skeleton
                h-36
                w-36
                rounded-full
              '
            />

            <div
              className='
                skeleton
                h-4
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

            <div
              className='
                skeleton
                h-10
                w-full
                rounded-xl
              '
            />
          </div>
        </div>

        <div
          className='
            space-y-4

            rounded-2xl
            border
            border-base-300
            bg-base-100/40

            p-5

            backdrop-blur-xl

            lg:col-span-2
          '>
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className='
                skeleton
                h-11
                w-full
                rounded-xl
              '
            />
          ))}

          <div
            className='
              skeleton
              h-28
              w-full
              rounded-xl
            '
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
