import { cubicBezier } from "framer-motion";

export const easing = cubicBezier(0.22, 1, 0.36, 1);

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: easing,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const imageVariant = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    rotate: -5,
    filter: "blur(16px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: easing,
    },
  },
};

export const badgeVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 12,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
};

export const listVariant = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: easing,
    },
  },
};

export const floatingImage = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.9,
    filter: "blur(18px)",
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },

  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};
