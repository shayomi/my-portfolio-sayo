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
