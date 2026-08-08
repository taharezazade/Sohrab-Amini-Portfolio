/** @format */

import { motion } from "framer-motion";

import { fadeRight } from "./about.animations";

function AboutContent({ data }) {
  if (!data) return null;

  return (
    <motion.div variants={fadeRight}>
      <div className='space-y-0'>
        <span
          className='
            inline-flex
            text-6xl
            font-black
            pb-4
            text-primary
          '>
          {data.title}
        </span>

        <h2
          className='
            text-3xl
            font-black
            pb-2
            text-base-content
            md:text-4xl
            xl:text-5xl
          '>
          {data.heading}
        </h2>
      </div>

      <p
        className='
          whitespace-pre-line
          text-justify
          leading-5
          text-base
          font-light
          text-base-content/75
          md:text-lg
        '>
        {data.description}
      </p>
    </motion.div>
  );
}

export default AboutContent;
