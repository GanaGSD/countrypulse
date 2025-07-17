"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  className,
}: {
  imageUrl: string;
  children: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchStartTime, setTouchStartTime] = useState(0);

  // Mouse handlers (for desktop)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Touch handlers (for mobile - click/tap only)
  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    setTouchStartY(touch.clientY);
    setTouchStartTime(Date.now());
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.changedTouches[0];
    const touchEndY = touch.clientY;
    const touchDuration = Date.now() - touchStartTime;
    const touchDistance = Math.abs(touchEndY - touchStartY);

    // Only trigger if:
    // 1. Touch was short (< 200ms) - not a long press
    // 2. Touch didn't move much (< 10px) - not a scroll
    if (touchDuration < 200 && touchDistance < 10) {
      event.preventDefault();
      setIsClicked(!isClicked); // Toggle on tap
    }
  };

  // Click handler for desktop
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // Determine if we should show overlay
  const shouldShowHover = isHovered || isClicked;

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      ref={ref}
      className={cn(
        "bg-transparent overflow-hidden group/card relative cursor-pointer",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          animate={shouldShowHover ? "hover" : "initial"}
          exit="exit"
        >
          <motion.div 
            className={cn(
              "absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500",
              shouldShowHover ? "block" : "hidden"
            )}
          />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <img
              alt="image"
              className={cn(
                "h-full w-full object-cover scale-[1.30]",
                imageClassName
              )}
              width="1000"
              height="1000"
              src={imageUrl}
            />
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className={"text-white absolute inset-0 flex items-center justify-center z-40"}>
            <div className={cn("text-center", childrenClassName)}>
                {children}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
    y: 0,
    scale: 1,
  },
  exit: {
    x: 0,
    y: 0,
    scale: 1,
  },
  hover: {
    scale: 1.05, // Simple scale effect on hover
  },
};

const textVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
  },
};