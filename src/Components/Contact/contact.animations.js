/** @format */

/* =========================================================
   Contact Section Animations
========================================================= */

/* Container */

export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/* Fade Left */

export const fadeLeftVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* Fade Right */

export const fadeRightVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* Fade Up */

export const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* Card */

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/* Feature */

export const featureVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* CTA */

export const ctaVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* Image */

export const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },

  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
