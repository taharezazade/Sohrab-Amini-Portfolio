/** @format */

import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";
import AboutStats from "./AboutStats";

import { containerVariants } from "./about.animations";

const AboutGrid = ({ about }) => {
  if (!about) {
    return null;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className='space-y-4'>
      <section
        className='
          grid
          items-center
          gap-14
          lg:grid-cols-[1.3fr_.9fr]
        '>
        <span className="flex flex-col gap-2">
          <AboutContent about={about} />
        </span>

        <AboutInfo about={about} />
      </section>

      <AboutStats about={about} />
    </motion.div>
  );
};

export default AboutGrid;
