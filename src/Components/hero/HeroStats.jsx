/** @format */

import { motion } from "framer-motion";
import { fadeUp, containerVariants } from "./hero.animations";
import BorderGlow from "../common/BorderGlow";
const stats = [
  {
    id: 1,
    number: "+120",
    title: "پروژه موفق",
  },
  {
    id: 2,
    number: "5+",
    title: "سال تجربه",
  },
  {
    id: 3,
    number: "99%",
    title: "رضایت مشتری",
  },
];

function HeroStats() {
  return (
    <BorderGlow>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='
        grid
        grid-cols-1
        sm:grid-cols-3
        gap-5
        mt-24
      '>
        {stats.map((item) => (
          <div
            key={item.id}
            variants={fadeUp}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className='
            rounded-3xl
            border
            border-base-300
            bg-base-200/40
            backdrop-blur-xl
            p-8
            text-center
          '>
            <h3 className='text-5xl font-black text-primary'>{item.number}</h3>

            <p className='mt-3 text-base-content/70'>{item.title}</p>
          </div>
        ))}
      </motion.div>
    </BorderGlow>
  );
}

export default HeroStats;
