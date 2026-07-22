import { motion } from "framer-motion";
import { QuoteUp } from "iconsax-reactjs";

import { quote } from "./about.data";
import { quoteVariant } from "./about.animations";

function AboutQuote() {
  return (
    <motion.section variants={quoteVariant} className="mt-16">
      <div
        className="
            relative
            overflow-hidden
            w-full h-fit
            py-5
            text-center
          "
      >
        <div
          className="
              absolute
              -top-20
              left-1/2
              h-64
              w-64
              -translate-x-1/2
              rounded-full
              bg-primary/10
              blur-[110px]
            "
        />

        <motion.div
          animate={{
            rotate: [0, 4, -4, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
          }}
          className="relative z-10"
        >
          <QuoteUp variant="Bulk" size={46} className="mx-auto text-primary" />
        </motion.div>

        <motion.h3
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
              relative
              z-10
              mt-8
              mx-auto
              max-w-4xl
              text-2xl
              font-bold
              text-base-content
              md:text-3xl
            "
        >
          "{quote}"
        </motion.h3>

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 90,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="
              relative
              z-10
              mx-auto
              mt-10
              h-1
              rounded-full
              bg-primary
            "
        />
      </div>
    </motion.section>
  );
}

export default AboutQuote;
