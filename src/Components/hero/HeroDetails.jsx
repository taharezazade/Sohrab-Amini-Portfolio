/** @format */

import { motion } from "framer-motion";
import { ArrowLeft2 } from "iconsax-reactjs";

import useHero from "@/hooks/useHero";

import { containerVariants, fadeLeft, badgeVariant } from "./hero.animations";

function HeroDetails() {
  const { services, technologies, details } = useHero();

  return (
    <motion.aside
      variants={containerVariants}
      initial='hidden'
      animate='show'
      className='flex flex-col gap-2'>
      <motion.div variants={fadeLeft}>
        <span className='text-primary font-semibold'>{details?.badge}</span>
        <h3>{details?.title}</h3>
        <p className='mt-3 text-base-content/70 leading-8'>
          {details.description}
        </p>
      </motion.div>

      <motion.div variants={containerVariants} className='space-y-2'>
        {services.map(({ id, title, description, icon: Icon }) => (
          <motion.div
            key={id}
            variants={badgeVariant}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className='
                group
                rounded-3xl
                border
                border-base-300
                bg-base-200/40
                backdrop-blur-xl
                p-2
                cursor-default
              '>
            <div className='flex items-start gap-3'>
              <div
                className='
                    flex
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    p-1
                    text-primary
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-primary-content
                  '>
                <Icon variant='Bulk' size={38} />
              </div>

              <div className='flex-1'>
                <h4 className='text-lg font-bold'>{title}</h4>

                <p className='mt-1 text-sm leading-7 text-base-content/70'>
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeLeft}>
        <h4 className='mb-4 text-lg font-bold'>تکنولوژی‌ها</h4>

        <div className='flex flex-wrap gap-2'>
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={badgeVariant}
              whileHover={{
                scale: 1.08,
              }}
              className='
                badge
                badge-outline
                badge-primary
                rounded-full
                pt-1
              '>
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.a
        href={details?.button?.link}
        variants={fadeLeft}
        className='
          btn
          btn-primary
          w-fit
          rounded-full
          font-light
          shadow-none
        '>
        {details.button.text}

        <ArrowLeft2 variant='Outline' size={18} />
      </motion.a>
    </motion.aside>
  );
}

export default HeroDetails;
