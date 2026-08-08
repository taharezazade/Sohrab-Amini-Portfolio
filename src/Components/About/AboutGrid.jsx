/** @format */

import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";
import AboutSkills from "./AboutSkills";
import AboutStats from "./AboutStats";
import AboutQuote from "./AboutQuote";

import { containerVariants } from "./about.animations";

function AboutGrid({ about }) {
  if (!about) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className='space-y-24'>
      <section
        className='
          grid
          items-center
          gap-14
          lg:grid-cols-[1.3fr_.9fr]
        '>
        <AboutContent data={about.content} />

        <AboutInfo data={about.personalInfo} />
      </section>

      <AboutSkills data={about.skills} />

      <AboutStats data={about.stats} />

      <AboutQuote data={about.quote} />
    </motion.div>
  );
}

export default AboutGrid;
