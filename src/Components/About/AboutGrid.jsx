import { motion } from "framer-motion";

import AboutContent from "./AboutContent";
import AboutInfo from "./AboutInfo";
import AboutSkills from "./AboutSkills";
import AboutQuote from "./AboutQuote";
import AboutStats from "./AboutStats";

import { containerVariants } from "./about.animations";

function AboutGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.25,
      }}
      className="space-y-24"
    >
      <section
        className="
          grid
          items-center
          gap-14
          lg:grid-cols-[1.3fr_.9fr]
        "
      >
        <AboutContent />
        <AboutInfo />
      </section>

      {/* مهارت‌ها */}
      <AboutSkills />

      {/* آمار */}
      <AboutStats />

      {/* نقل قول */}
      <AboutQuote />
    </motion.div>
  );
}

export default AboutGrid;
