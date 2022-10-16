/** ************************************************ Page transitions */
export const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.4,
    },
  },
};
