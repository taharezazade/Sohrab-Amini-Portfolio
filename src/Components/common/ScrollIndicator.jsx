import { motion } from "framer-motion";
import { LiquidGlass } from "@creativoma/liquid-glass";

function ScrollIndicator() {
  const handleScroll = () => {
    const section = document.getElementById("about");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.button
      onClick={handleScroll}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        z-40
        hidden
        md:flex
        md:flex-col
        md:items-center
        gap-2
      "
    >
      <LiquidGlass
        displace={1}
        distortionScale={-120}
        redOffset={0}
        greenOffset={0}
        blueOffset={0}
        brightness={40}
        opacity={0.18}
        backdropBlur={2}
        className="
          rounded-full
          p-1
        "
      >
        <div
          className="
            relative
            flex
            h-10
            w-5
            justify-center
            rounded-full
            border
            border-base-content/15
          "
        >
          <motion.div
            animate={{
              y: [6, 24, 6],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              top-0
              h-2.5
              w-2.5
              rounded-full
              bg-primary
            "
          />
        </div>
      </LiquidGlass>
      <span className="text-md">اسکرول کنید</span>
    </motion.button>
  );
}

export default ScrollIndicator;
