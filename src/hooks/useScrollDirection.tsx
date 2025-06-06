"use client";
import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }
  }, [scrollDirection]);

  return scrollDirection;
}

export default useScrollDirection;
