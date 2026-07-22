import { motion } from "framer-motion";

import HeroFloatingCards from "./HeroFloatingCards";
import Hero from "../../assets/images/Hero.png";

import { floatingImage } from "./hero.animations";

function HeroImage() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        items-center
        justify-center
        w-fit
      "
    >
      {/* Primary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.35, 0.22],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-96
          w-96
          rounded-full
          bg-primary/30
          blur-[120px]
        "
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[26rem]
          w-[26rem]
          rounded-full
          bg-secondary/20
          blur-[150px]
        "
      />

      {/* Glass Halo */}
      <motion.div
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[26rem]
          w-[26rem]
          rounded-full
          border
          border-base-content/10
          bg-base-100/5
          backdrop-blur-xl
        "
      />

      {/* Floating Cards */}
      <HeroFloatingCards />

      {/* Hero Image */}
      <motion.img
        src={Hero}
        alt="Sohrab Amini"
        draggable={false}
        variants={floatingImage}
        initial="hidden"
        animate={["show", "animate"]}
        className="
          relative
          z-20
          select-none
          pointer-events-none
          drop-shadow-[0_40px_80px_rgba(0,0,0,.25)]

          w-[20rem]
          sm:w-[23rem]
          md:w-[26rem]
          lg:w-[30rem]
          xl:w-[34rem]
        "
      />
    </div>
  );
}

export default HeroImage;
