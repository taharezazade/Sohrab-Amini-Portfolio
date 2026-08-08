/** @format */

import { motion } from "framer-motion";
import { Code1, Hierarchy, Monitor, Cpu } from "iconsax-reactjs";

import { containerVariants, scaleIn, cardHover } from "./about.animations";

const icons = {
  Backend: Code1,
  CMS: Hierarchy,
  Frontend: Monitor,
  Tools: Cpu,
};

function AboutSkills({ data }) {
  if (!data) return null;

  return (
    <motion.section variants={containerVariants} className='mt-10'>
      <div className='mb-10 text-center'>
        <span
          className='
            inline-flex
            px-4
            py-2
            text-4xl
            font-black
            text-primary
          '>
          تخصص‌ها
        </span>

        <h3
          className='
            mt-4
            text-3xl
            font-black
            text-base-content
          '>
          تکنولوژی‌هایی که با آن‌ها کار می‌کنم
        </h3>

        <p
          className='
            mt-3
            max-w-2xl
            mx-auto
            leading-8
            text-base-content/65
          '>
          مجموعه‌ای از فناوری‌ها، ابزارها و فریمورک‌هایی که در توسعه پروژه‌های
          حرفه‌ای از آن‌ها استفاده می‌کنم.
        </p>
      </div>

      <div
        className='
          grid
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        '>
        {data.map((skill) => {
          const Icon = icons[skill.title];

          return (
            <div className='hover-3d' key={skill.title}>
              <figure className='max-w-100 rounded-3xl'>
                <motion.div
                  variants={scaleIn}
                  whileHover={cardHover}
                  className='
                    group
                    rounded-3xl
                    border
                    border-base-300
                    bg-base-100/60
                    backdrop-blur-xl
                    p-3
                    transition-all
                    duration-300
                  '>
                  <div className='flex flex-row gap-3'>
                    <div
                      className='
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-primary/10
                        text-primary
                        transition-transform
                        group-hover:rotate-6
                        group-hover:scale-110
                      '>
                      <Icon variant='Bulk' size={44} />
                    </div>

                    <p
                      className='
                        mt-6
                        text-xl
                        font-bold
                        text-primary
                      '>
                      {skill.title}
                    </p>
                  </div>

                  <div
                    className='
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    '>
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className='
                          rounded-full
                          border
                          border-primary/20
                          bg-primary/10
                          px-2
                          py-1.5
                          text-xs
                          font-medium
                          text-primary
                          transition-all
                          hover:bg-primary
                          hover:text-primary-content
                        '>
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </figure>

              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default AboutSkills;
