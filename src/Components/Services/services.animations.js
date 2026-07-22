/** @format */
export const serviceCardVariants = {
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const floatingVariant = {
  initial: {
    y: 0,
  },

  animate: {
    y: [-5, 5, -5],

    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const servicesContainerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/** @format */

export const sectionVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const hoverVariants = {
  rest: {
    y: 0,
    scale: 1,
  },

  hover: {
    y: -10,
    scale: 1.015,

    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
    },
  },
};

export const iconVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },

  hover: {
    scale: 1.08,
    rotate: -6,

    transition: {
      type: "spring",
      stiffness: 300,
      damping: 14,
    },
  },
};

export const buttonVariants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.04,

    transition: {
      duration: 0.2,
    },
  },

  tap: {
    scale: 0.96,
  },
};

export const badgeVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      delay: 0.15,
      duration: 0.45,
    },
  },
};

export const drawerVariants = {
  hidden: {
    x: "100%",
    opacity: 0,
  },

  show: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      stiffness: 170,
      damping: 22,
    },
  },

  exit: {
    x: "100%",
    opacity: 0,

    transition: {
      duration: 0.3,
    },
  },
};

export const overlayVariants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,

    transition: {
      duration: 0.25,
    },
  },

  exit: {
    opacity: 0,

    transition: {
      duration: 0.2,
    },
  },
};
