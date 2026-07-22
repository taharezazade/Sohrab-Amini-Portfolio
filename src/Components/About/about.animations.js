/** @format */

export const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },

  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 40,
    filter: "blur(8px)",
  },

  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardHover = {
  y: -8,
  scale: 1.02,

  transition: {
    duration: 0.25,
  },
};

export const quoteVariant = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
