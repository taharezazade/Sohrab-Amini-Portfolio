/** @format */

const SettingsSkeleton = () => {
  return (
    <div
      className='
        space-y-4
      '>
      <div
        className='
          rounded-2xl
          border
          border-base-300
          bg-base-100/40
          p-4
          backdrop-blur-xl
        '>
        <div className='flex items-center justify-between'>
          <div className='space-y-2'>
            <div
              className='
                skeleton
                h-5
                w-36
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
          xl:grid-cols-5
        '>
        <div
          className='
            rounded-2xl
            border
            border-base-300
            bg-base-100/40
            p-4
            xl:col-span-3
          '>
          <div className='space-y-4'>
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className='
                  skeleton
                  h-10
                  w-full
                  rounded-xl
                '
              />
            ))}
          </div>
        </div>

        <div
          className='
            rounded-2xl
            border
            border-base-300
            bg-base-100/40
            p-4
            xl:col-span-2
          '>
          <div className='space-y-4'>
            <div
              className='
                skeleton
                h-32
                w-full
                rounded-2xl
              '
            />

            <div
              className='
                skeleton
                h-4
                w-3/4
              '
            />

            <div
              className='
                skeleton
                h-4
                w-1/2
              '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSkeleton;
