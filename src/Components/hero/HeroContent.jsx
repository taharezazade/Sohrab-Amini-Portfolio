/** @format */

import { motion } from "framer-motion";
import { ArrowLeft2 } from "iconsax-reactjs";

import useHero from "@/hooks/useHero";

import { containerVariants, fadeUp, badgeVariant } from "./hero.animations";

function HeroContent() {
  const { hero, badges } = useHero();

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='show'
      className='flex flex-col items-center lg:items-start text-center lg:text-right gap-2'>
      <motion.h1
        variants={fadeUp}
        className='text-5xl md:text-6xl xl:text-7xl font-black leading-tight'>
        {hero.name}
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        className='text-xl md:text-2xl xl:text-3xl text-primary font-bold'>
        {hero.title}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className='max-w-xl text-base md:text-lg leading-9 text-base-content/70'>
        {hero.description}
      </motion.p>

      <motion.div
        variants={containerVariants}
        className='flex flex-wrap justify-center lg:justify-start gap-3'>
        {badges.map(({ id, title, icon: Icon }) => (
          <motion.div
            key={id}
            variants={badgeVariant}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className='flex items-center gap-2 rounded-full border border-base-300 bg-base-200/60 backdrop-blur-xl px-3 py-1'>
            <Icon variant='Bulk' size={28} className='text-primary' />

            <span>{title}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className='flex flex-col sm:flex-row gap-4 pt-2'>
        <a
          href={hero.buttons.primary.link}
          className='btn btn-primary rounded-full px-8 text-lg shadow-none'>
          {hero.buttons.primary.text}

          <ArrowLeft2 size={18} />
        </a>

        <a
          href={hero.buttons.secondary.link}
          className='btn btn-ghost rounded-full px-8 text-lg'>
          {hero.buttons.secondary.text}
        </a>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
