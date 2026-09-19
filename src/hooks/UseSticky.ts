'use client'
import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/plugins";

interface StickyState {
  sticky: boolean;
}

const UseSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      setSticky(scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // ScrollTrigger listener for GSAP ScrollSmoother virtual scroll updates
    let st: any = null;
    try {
      st = ScrollTrigger.create({
        start: "top -80",
        onUpdate: (self: any) => {
          setSticky(self.scroll() > 80);
        },
      });
    } catch (e) {}

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
      if (st) st.kill();
    };
  }, []);

  return {
    sticky,
  };
};

export default UseSticky;
