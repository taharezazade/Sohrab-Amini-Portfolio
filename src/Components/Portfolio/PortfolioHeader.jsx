/** @format */

import { motion } from "framer-motion";

import { portfolioSection } from "./portfolio.data";

function PortfolioHeader() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mx-auto mb-14 max-w-4xl text-center"
    >
      {/* Title */}

      <h2
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-primary
          md:text-5xl
          lg:text-6xl
        "
      >
        {portfolioSection.title}
      </h2>

      {/* Subtitle */}

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          leading-9
          text-base-content/70
          lg:text-lg
        "
      >
        {portfolioSection.subtitle}
      </p>
    </motion.header>
  );
}

export default PortfolioHeader;
