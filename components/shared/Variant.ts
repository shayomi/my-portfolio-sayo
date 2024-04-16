interface AnimationParams {
  direction: "left" | "right" | "up" | "down";
  type: string;
  delay: number;
  duration: number;
}

export const fadeIn = (
  direction: AnimationParams["direction"],
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      y: direction === "up" ? 10 : direction === "down" ? -10 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn2 = (
  direction: AnimationParams["direction"],
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -10 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: [1, 1, 1, 1, 1],
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
      borderRadius: ["0%", "0%", "20%", "30%", "50%"],
    },
    exit: {
      // Define exit animation variant
      x: 0,
      y: "-200%",
      opacity: 1,
      scale: [1, 2, 2, 1, 1],
      borderRadius: ["0%", "0%", "20%", "30%", "50%"],
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
        borderRadius: {
          values: ["20%", "20%", "50%", "50%", "50%"],
          delay: delay,
        },
      }, // You can adjust the duration as per your preference
    },
  };
};

export const fadeIn3 = (
  direction: AnimationParams["direction"],
  type: string,
  delay: number,
  duration: number
) => {
  return {
    hidden: {
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -10 : -100,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

interface StaggerContainerParams {
  staggerChildren: number;
  delayChildren: number;
}

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: StaggerContainerParams) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren,
      },
    },
  };
};

export const plateVariants = {
  hidden: {
    x: "120%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
};
