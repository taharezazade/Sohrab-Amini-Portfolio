/** @format */

import { motion } from "framer-motion";

import PortfolioCard from "./PortfolioCard";

function PortfolioGrid({ projects, onOpen }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className='
        grid md:grid-cols-2 xl:grid-cols-3
        mt-12
        gap-8
      '>
      {projects.map((project) => (
        <PortfolioCard key={project.id} project={project} onOpen={onOpen} />
      ))}
    </motion.div>
  );
}

export default PortfolioGrid;
