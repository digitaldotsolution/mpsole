
"use client"

import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation';
import { animationCreate } from '@/utils/utils';
import { scrollSmother } from "@/utils/scrollSmother";
import ScrollToTop from '@/components/common/ScrollToTop';
import Preloader from '@/components/common/Preloader';

import {
  ScrollSmoother,
  ScrollTrigger,
} from "@/plugins";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger,);

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function Wrapper({ children }: any) {

  const pathname = usePathname();

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Reset scroll position to top
    window.scrollTo(0, 0);

    // Bind fresh ScrollSmoother to newly mounted page DOM if not already created
    const wrapperEl = document.getElementById("smooth-wrapper");
    const contentEl = document.getElementById("smooth-content");
    if (wrapperEl && contentEl) {
      const activeSmoother = ScrollSmoother.get();
      if (!activeSmoother) {
        ScrollSmoother.create({
          wrapper: wrapperEl,
          content: contentEl,
          smooth: 1.35,
          effects: true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      }
    }

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (typeof window !== "undefined" && window.location.hash) {
        const smoother = ScrollSmoother.get();
        if (smoother) {
          smoother.scrollTo(window.location.hash, true, "top 80px");
        }
      }
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      // 1. Kill smoother attached to the page being unmounted
      const oldSmoother = ScrollSmoother.get();
      if (oldSmoother) {
        oldSmoother.kill();
      }
      // 2. Clear triggers belonging to the page being unmounted
      ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, [pathname]);


  // round cursor
  const cursorBallRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorBall = cursorBallRef.current;

    if (!cursorBall) return;

    // Mouse move listener to update cursor position
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursorBall, {
        duration: 0.3,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        ease: 'power2.out',
      });
    };

    // Hover effects for links
    const handleMouseEnter = () => {
      cursorBall.classList.add('hovered');
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 2,
        opacity: 0,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      cursorBall.classList.remove('hovered');
      gsap.to(cursorBall, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
      });
    };

    // Attach event listeners
    document.addEventListener('mousemove', handleMouseMove);
    const hoverElements = document.querySelectorAll('a');
    hoverElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);






  return (
    <>
      <Preloader />
      <div id="magic-cursor">
        <div id="ball" ref={cursorBallRef}></div>
      </div>
      {children}
      <ScrollToTop />
    </>
  )
}
