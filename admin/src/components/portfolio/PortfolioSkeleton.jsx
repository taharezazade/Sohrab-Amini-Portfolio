/** @format */

import { motion } from "framer-motion";

const PortfolioSkeleton = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      className='
        space-y-6
      '>
      {/* Header Skeleton */}

      <div
        className='
          card
          bg-base-100
          border-base-300
          border
          shadow-sm
        '>
        <div
          className='
            card-body

            flex

            flex-col

            gap-4

            md:flex-row

            md:items-center

            md:justify-between
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
                h-14
                w-14
                rounded-2xl
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
                  w-72
                '
              />
            </div>
          </div>

          <div
            className='
              skeleton
              h-12
              w-40
              rounded-xl
            '
          />
        </div>
      </div>

      {/* Stats Skeleton */}

      <div
        className='
          grid

          gap-4

          sm:grid-cols-2

          xl:grid-cols-4
        '>
        {Array.from({
          length: 4,
        }).map((_, index) => (
          <div
            key={index}

            className='
                card
                bg-base-100
                border-base-300
                border
              '>
            <div
              className='
                  card-body

                  flex

                  flex-row

                  items-center

                  gap-4

                  p-5
                '>
              <div
                className='
                    skeleton

                    h-12

                    w-12

                    rounded-2xl
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
                      w-12
                    '
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar Skeleton */}

      <div
        className='
          card
          bg-base-100
          border-base-300
          border
        '>
        <div
          className='
            card-body

            flex

            flex-col

            gap-4

            lg:flex-row
          '>
          <div
            className='
              skeleton

              h-12

              w-full

              rounded-xl

              lg:max-w-md
            '
          />

          <div
            className='
              flex

              flex-wrap

              gap-3
            '>
            {Array.from({
              length: 4,
            }).map((_, index) => (
              <div
                key={index}

                className='
                    skeleton

                    h-12

                    w-32

                    rounded-xl
                  '
              />
            ))}
          </div>
        </div>
      </div>

      {/* Table Skeleton */}

      <div
        className='
          card

          bg-base-100

          border-base-300

          overflow-hidden

          border
        '>
        <div
          className='
            overflow-x-auto
          '>
          <table
            className='
              table
              w-full
            '>
            <thead>
              <tr>
                {Array.from({
                  length: 5,
                }).map((_, index) => (
                  <th key={index}>
                    <div
                      className='
                          skeleton
                          h-4
                          w-20
                        '
                    />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {Array.from({
                length: 6,
              }).map((_, row) => (
                <tr key={row}>
                  {Array.from({
                    length: 5,
                  }).map((_, col) => (
                    <td key={col}>
                      {col === 0 ?
                        <div
                          className='
                                flex
                                items-center
                                gap-3
                              '>
                          <div
                            className='
                                  skeleton
                                  h-12
                                  w-12
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
                          </div>
                        </div>
                      : <div
                          className='
                                skeleton
                                h-5
                                w-20
                              '
                        />
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioSkeleton;
