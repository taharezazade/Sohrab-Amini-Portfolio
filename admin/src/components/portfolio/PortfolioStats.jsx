/** @format */

import { motion } from "framer-motion";
import { Briefcase, TickCircle, Star1, Archive } from "iconsax-reactjs";

const PortfolioStats = ({ portfolios = [] }) => {
  const total = portfolios.length;

  const published = portfolios.filter(
    (item) => item.status === "PUBLISHED",
  ).length;

  const featured = portfolios.filter((item) => item.featured).length;

  const archived = portfolios.filter(
    (item) => item.status === "ARCHIVED",
  ).length;

  const stats = [
    {
      title: "کل نمونه‌کارها",

      value: total,

      icon: Briefcase,

      color: "text-primary",

      bg: "bg-primary/10",
    },

    {
      title: "منتشر شده",

      value: published,

      icon: TickCircle,

      color: "text-success",

      bg: "bg-success/10",
    },

    {
      title: "پروژه ویژه",

      value: featured,

      icon: Star1,

      color: "text-warning",

      bg: "bg-warning/10",
    },

    {
      title: "آرشیو شده",

      value: archived,

      icon: Archive,

      color: "text-error",

      bg: "bg-error/10",
    },
  ];

  return (
    <div
      className='
        grid
        gap-4

        sm:grid-cols-2

        xl:grid-cols-4
      '>
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}

            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.3,
              delay: index * 0.05,
            }}

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
                    flex-row
                    items-center
                    gap-4
                    p-5
                  '>
              <div
                className={`
                      ${item.bg}

                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                    `}>
                <Icon
                  size={26}

                  className={item.color}

                  variant='Bulk'
                />
              </div>

              <div>
                <p
                  className='
                        text-base-content/60
                        text-sm
                      '>
                  {item.title}
                </p>

                <p
                  className='
                        mt-1
                        text-2xl
                        font-black
                      '>
                  {item.value}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PortfolioStats;
