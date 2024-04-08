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
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
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
