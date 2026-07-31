/** @format */

const AboutSkeleton = () => {
  return (
    <div
      className='
        space-y-6
      '>
      {/* Header Skeleton */}
      <div
        className='
          card
          bg-base-100
          border
          border-base-300
          shadow-sm
        '>
        <div
          className='
            card-body
          '>
          <div
            className='
              flex
              items-center
              gap-4
            '>
            <div
              className='
                skeleton
                w-12
                h-12
                rounded-xl
              '
            />

            <div
              className='
                space-y-2
              '>
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
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div
        className='
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        '>
        {/* Form Side */}
        <div
          className='
            xl:col-span-2
            space-y-6
          '>
          <div
            className='
              card
              bg-base-100
              border
              border-base-300
            '>
            <div
              className='
                card-body
                space-y-5
              '>
              {Array.from({
                length: 5,
              }).map((_, index) => (
                <div
                  key={index}
                  className='
                      space-y-2
                    '>
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
                        h-12
                        w-full
                        rounded-lg
                      '
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Image Upload Skeleton */}
          <div
            className='
              card
              bg-base-100
              border
              border-base-300
            '>
            <div
              className='
                card-body
              '>
              <div
                className='
                  skeleton
                  h-52
                  w-full
                  rounded-xl
                '
              />
            </div>
          </div>

          {/* Actions Skeleton */}
          <div
            className='
              card
              bg-base-100
              border
              border-base-300
            '>
            <div
              className='
                card-body
              '>
              <div
                className='
                  skeleton
                  h-12
                  w-full
                  rounded-lg
                '
              />
            </div>
          </div>
        </div>

        {/* Preview Side */}
        <div
          className='
            space-y-6
          '>
          {/* Preview */}
          <div
            className='
              card
              bg-base-100
              border
              border-base-300
            '>
            <div
              className='
                card-body
                space-y-4
              '>
              <div
                className='
                  skeleton
                  h-44
                  w-full
                  rounded-xl
                '
              />

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
                h-4
                  w-full
                '
              />

              <div
                className='
                  skeleton
                  h-4
                  w-3/4
                '
              />
            </div>
          </div>

          {/* Status */}
          <div
            className='
              card
              bg-base-100
              border
              border-base-300
            '>
            <div
              className='
                card-body
                space-y-4
              '>
              {Array.from({
                length: 3,
              }).map((_, index) => (
                <div
                  key={index}
                  className='
                      flex
                      justify-between
                      items-center
                    '>
                  <div
                    className='
                        skeleton
                        h-5
                        w-28
                      '
                  />

                  <div
                    className='
                        skeleton
                        h-6
                        w-20
                        rounded-full
                      '
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Skeleton */}
      <div
        className='
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-4
        '>
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <div
            key={index}
            className='
                card
                bg-base-100
                border
                border-base-300
              '>
            <div
              className='
                  card-body
                  flex-row
                  items-center
                  gap-4
                '>
              <div
                className='
                    skeleton
                    w-12
                    h-12
                    rounded-xl
                  '
              />

              <div
                className='
                    space-y-2
                  '>
                <div
                  className='
                      skeleton
                      h-3
                      w-20
                    '
                />

                <div
                  className='
                      skeleton
                      h-6
                      w-16
                    '
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkeleton;
