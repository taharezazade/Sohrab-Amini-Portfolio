/** @format */

import { motion } from "framer-motion";

import { containerVariants, scaleIn } from "./about.animations";

import BorderGlow from "../common/BorderGlow";

function AboutStats({ data }) {
  if (!data) return null;

  return (
    <motion.section
      variants={containerVariants}
      className='
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      '>
      {data.map((item) => {
        const Icon = item.icon;

        return (
          <BorderGlow key={item.title}>
            <motion.article
              variants={scaleIn}
              transition={{
                duration: 0.25,
              }}
              className='
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-base-300
                bg-base-100
                p-7
                shadow-lg
                transition-all
                duration-300
              '>
              <Icon
                variant='Bulk'
                className='
                  absolute
                  top-0
                  left-0
                  h-36
                  w-36
                  text-primary/10
                  pointer-events-none
                '
              />

              <div className='relative z-10'>
                <h2
                  className='
                    text-6xl
                    font-black
                    text-primary
                  '>
                  {item.value}
                  {item.suffix}
                </h2>

                <h3
                  className='
                    mt-4
                    text-xl
                    font-bold
                    text-base-content
                  '>
                  {item.title}
                </h3>

                <div className='my-5 h-px bg-base-300' />

                <p
                  className='
                    leading-8
                    text-base-content/70
                  '>
                  {item.description}
                </p>
              </div>
            </motion.article>
          </BorderGlow>
        );
      })}
    </motion.section>
  );
}

export default AboutStats;
