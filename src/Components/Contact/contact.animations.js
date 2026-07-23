/** @format */

export const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -80,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 80,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 40,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const featureVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const ctaVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const floatingAnimation = {
  y: [0, -12, 0],

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const glowAnimation = {
  opacity: [0.45, 0.9, 0.45],
  scale: [1, 1.08, 1],

  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },
};
