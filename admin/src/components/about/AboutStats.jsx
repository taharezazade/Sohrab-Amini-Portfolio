/** @format */

import { TextBlock, Code, TickCircle, Image } from "iconsax-reactjs";

const AboutStats = () => {
  const stats = [
    {
      id: 1,
      title: "تعداد توضیحات",
      value: "120",
      unit: "کلمه",
      icon: TextBlock,
    },
    {
      id: 2,
      title: "مهارت‌ها",
      value: "8",
      unit: "مورد",
      icon: Code,
    },
    {
      id: 3,
      title: "وضعیت",
      value: "فعال",
      unit: "",
      icon: TickCircle,
    },
    {
      id: 4,
      title: "تصویر",
      value: "1",
      unit: "فایل",
      icon: Image,
    },
  ];

  return (
    <div
      className='
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
      '>
      {stats.map(({ id, title, value, unit, icon: Icon }) => (
        <div
          key={id}
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
                  p-5
                '>
            <div
              className='
                    flex
                    items-center
                    justify-between
                    gap-3
                  '>
              <div
                className='
                      w-11
                      h-11
                      rounded-xl
                      bg-primary/10
                      text-primary
                      flex
                      items-center
                      justify-center
                    '>
                <Icon size={24} variant='Bulk' />
              </div>

              <div
                className='
                      text-right
                    '>
                <p
                  className='
                        text-sm
                        text-base-content/60
                      '>
                  {title}
                </p>

                <div
                  className='
                        flex
                        items-end
                        gap-1
                        justify-end
                        mt-1
                      '>
                  <span
                    className='
                          text-2xl
                          font-bold
                        '>
                    {value}
                  </span>

                  {unit && (
                    <span
                      className='
                              text-xs
                              text-base-content/60
                              mb-1
                            '>
                      {unit}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;
