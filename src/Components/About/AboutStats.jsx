/** @format */

import { Briefcase, Calendar, User } from "iconsax-reactjs";

const AboutStats = ({ about }) => {
  if (!about) {
    return null;
  }

  const stats = [
    {
      key: "birthYear",
      label: "سال تولد",
      value: about.birthYear ?? "—",
      icon: Calendar,
    },
    {
      key: "experience",
      label: "سابقه فعالیت",
      value:
        about.experience !== null && about.experience !== undefined ?
          `${about.experience}+ سال`
        : "—",
      icon: Briefcase,
    },
    {
      key: "status",
      label: "وضعیت فعالیت",
      value: "فعال",
      icon: User,
    },
  ];

  return (
    <section
      className='
        grid
        grid-cols-1
        gap-3
        sm:grid-cols-3
        md:gap-4
      '>
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.key}
            className='
              group
              relative
              overflow-hidden
              rounded-2xl
              bg-base-100
              px-4
              py-4
              shadow-sm
              transition-all
              duration-300

              dark:bg-base-100/80
            '>
            {/* Background Glow */}

            <div
              className='
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-20
                w-20
                rounded-full
                bg-primary/20
                opacity-0
                blur-2xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              '
            />

            {/* Content */}

            <div className='relative flex items-center gap-3'>
              {/* Icon */}

              <div
                className='
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                  transition-all
                  duration-300

                  group-hover:bg-primary
                  group-hover:text-primary-content
                '>
                <Icon size={20} variant='Bulk' />
              </div>

              {/* Text */}

              <div className='min-w-0'>
                <p
                  className='
                    truncate
                    text-[11px]
                    font-medium
                    text-base-content/50
                  '>
                  {stat.label}
                </p>

                <p
                  className='
                    mt-0.5
                    truncate
                    text-base
                    font-bold
                    leading-tight
                    text-base-content
                  '>
                  {stat.value}
                </p>
              </div>
            </div>

            {/* Bottom Accent */}

            <div
              className='
                absolute
                bottom-0
                left-4
                right-4
                h-px
                origin-right
                scale-x-0
                bg-primary/40
                transition-transform
                duration-300
                group-hover:scale-x-100
              '
            />
          </article>
        );
      })}
    </section>
  );
};

export default AboutStats;
