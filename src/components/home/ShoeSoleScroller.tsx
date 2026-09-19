'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "@/plugins";

const TOTAL_FRAMES = 117;
// Persistent module-level cache so images remain ready across Next.js route changes
const frameImagesCache: HTMLImageElement[] = [];

export default function ShoeSoleScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageBadgeRef = useRef<HTMLSpanElement>(null);
  const stageTitleRef = useRef<HTMLHeadingElement>(null);
  const stageDescRef = useRef<HTMLParagraphElement>(null);
  const specsCalloutRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const [loadProgress, setLoadProgress] = useState(frameImagesCache.length >= TOTAL_FRAMES ? 100 : 0);
  const [isLoaded, setIsLoaded] = useState(frameImagesCache.length >= TOTAL_FRAMES);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 992) {
      return;
    }
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // 1. Ensure ScrollSmoother exists before creating pinned trigger
    const wrapperEl = document.getElementById("smooth-wrapper");
    const contentEl = document.getElementById("smooth-content");
    if (wrapperEl && contentEl && !ScrollSmoother.get()) {
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

    const canvas = canvasRef.current;
    if (!canvas) return;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;

    // Fixed canvas buffer resolution (1280 x 720 matches images)
    canvas.width = 1280;
    canvas.height = 720;

    let images: HTMLImageElement[] = frameImagesCache;
    let loadedCount = frameImagesCache.length;
    let scheduledFrame = 1;
    let isRenderPending = false;

    const getFramePath = (index: number) => {
      const padded = String(index).padStart(3, '0');
      return `/frames/frame-${padded}.webp`;
    };

    // Fast direct render without clearRect (drawImage overwrites full canvas)
    const render = (targetFrame: number) => {
      const img = images[targetFrame - 1];
      if (!img || !img.complete) return;
      canvasCtx.drawImage(img, 0, 0, 1280, 720);
    };

    // Smooth non-blocking V-Sync frame queue
    const requestFrame = (index: number) => {
      scheduledFrame = index;
      if (!isRenderPending) {
        isRenderPending = true;
        requestAnimationFrame(() => {
          render(scheduledFrame);
          isRenderPending = false;
        });
      }
    };

    const ctx = gsap.context(() => {
      const handleImageLoaded = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${pct}%`;
        }
        setLoadProgress(pct);

        if (loadedCount === 1) {
          render(1);
        }
        if (loadedCount >= TOTAL_FRAMES) {
          setIsLoaded(true);
          render(1);
          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 150);
        }
      };

      if (frameImagesCache.length < TOTAL_FRAMES) {
        images = new Array(TOTAL_FRAMES);
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
          const img = new Image();
          images[i - 1] = img;
          frameImagesCache[i - 1] = img;
          img.onload = handleImageLoaded;
          img.onerror = handleImageLoaded;
          img.src = getFramePath(i);
          if (img.complete) {
            handleImageLoaded();
          }
        }
      } else {
        // Already cached in memory from previous visit
        render(1);
      }

      // Direct DOM text updates without causing React component re-renders
      let currentStage = 1;
      const updateStageInfo = (frame: number) => {
        let stage = 1;
        if (frame >= 75) stage = 3;
        else if (frame >= 35) stage = 2;

        if (stage !== currentStage) {
          currentStage = stage;
          if (stageBadgeRef.current && stageTitleRef.current && stageDescRef.current) {
            if (stage === 1) {
              stageBadgeRef.current.innerText = 'STAGE 01 / FULL CHASSIS ROTATION';
              stageTitleRef.current.innerText = 'Precision Engineered Footwear.';
              stageDescRef.current.innerText = 'Designed for race-ready resilience and zero-gravity comfort under continuous load.';
            } else if (stage === 2) {
              stageBadgeRef.current.innerText = 'STAGE 02 / SOLE DECOUPLING';
              stageTitleRef.current.innerText = 'Autonomous Sole Extraction.';
              stageDescRef.current.innerText = 'The footwear sole seamlessly separates from the upper chassis, engineered with aerodynamic precision.';
            } else {
              stageBadgeRef.current.innerText = 'STAGE 03 / 3-LAYER ANATOMY';
              stageTitleRef.current.innerText = '3-Layer Kinetic Propulsion.';
              stageDescRef.current.innerText = 'Orthotic memory insole, carbon propulsion plate, and high-traction gum rubber outsole floating as one.';
            }
          }
          if (specsCalloutRef.current) {
            if (stage === 3) {
              specsCalloutRef.current.style.opacity = '1';
              specsCalloutRef.current.style.transform = 'translateY(0)';
            } else {
              specsCalloutRef.current.style.opacity = '0';
              specsCalloutRef.current.style.transform = 'translateY(20px)';
            }
          }
        }
      };

      // ScrollTrigger instance with buttery smooth scrub
      ScrollTrigger.create({
        id: 'shoe-sole-anatomy-trigger',
        trigger: containerRef.current,
        start: 'top top',
        end: '+=2400',
        pin: true,
        pinSpacing: true,
        scrub: 0.3,
        fastScrollEnd: true,
        pinType: ScrollSmoother.get() ? "transform" : "fixed",
        onUpdate: (self: any) => {
          const frameIndex = Math.min(
            TOTAL_FRAMES,
            Math.max(1, Math.round(self.progress * (TOTAL_FRAMES - 1)) + 1)
          );
          requestFrame(frameIndex);
          updateStageInfo(frameIndex);
        },
      });

      // Immediate render frame 1 and refresh
      render(1);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="d-none d-lg-flex shoe-sole-scroller-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundColor: '#0a0a0c',
        color: '#ffffff',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Soft Amber Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(200, 168, 122, 0.12) 0%, rgba(10, 10, 12, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* Main High-Performance Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: '100%',
          maxHeight: '100vh',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          zIndex: 2,
        }}
      />

      {/* Loading Bar */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(20, 20, 24, 0.9)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '12px 28px',
            borderRadius: '30px',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '1px',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            minWidth: '220px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span>Loading 3D Anatomy</span>
            <span style={{ color: '#c8a87a', fontWeight: 600 }}>{loadProgress}%</span>
          </div>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              ref={progressBarRef}
              style={{
                width: '0%',
                height: '100%',
                backgroundColor: '#c8a87a',
                transition: 'width 0.1s linear',
              }}
            />
          </div>
        </div>
      )}

      {/* Scrollytelling Typography Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '150px',
          left: '60px',
          zIndex: 5,
          pointerEvents: 'none',
          maxWidth: '440px',
        }}
      >
        <span
          ref={stageBadgeRef}
          style={{
            display: 'inline-block',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            color: '#c8a87a',
            fontWeight: 700,
            marginBottom: '8px',
          }}
        >
          STAGE 01 / FULL CHASSIS ROTATION
        </span>
        <h2
          ref={stageTitleRef}
          style={{
            fontSize: '38px',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.5px',
            margin: 0,
            color: '#ffffff',
          }}
        >
          Precision Engineered Footwear.
        </h2>
        <p
          ref={stageDescRef}
          style={{
            fontSize: '15px',
            lineHeight: 1.5,
            color: 'rgba(255, 255, 255, 0.65)',
            marginTop: '12px',
          }}
        >
          Designed for race-ready resilience and zero-gravity comfort under continuous load.
        </p>
      </div>

      {/* Layer Specs Callout (Stage 3) */}
      <div
        ref={specsCalloutRef}
        style={{
          position: 'absolute',
          bottom: '60px',
          right: '60px',
          zIndex: 5,
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          opacity: 0,
          transform: 'translateY(20px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '12px 20px',
            borderRadius: '12px',
            minWidth: '260px',
          }}
        >
          <div style={{ fontSize: '11px', color: '#c8a87a', fontWeight: 600 }}>LAYER 01</div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Orthotic Cushion Insole</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Adaptive memory contouring</div>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '12px 20px',
            borderRadius: '12px',
            minWidth: '260px',
          }}
        >
          <div style={{ fontSize: '11px', color: '#c8a87a', fontWeight: 600 }}>LAYER 02</div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Carbon Propulsion Plate</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Dynamic torsional energy return</div>
        </div>

        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '12px 20px',
            borderRadius: '12px',
            minWidth: '260px',
          }}
        >
          <div style={{ fontSize: '11px', color: '#c8a87a', fontWeight: 600 }}>LAYER 03</div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff' }}>Traction Gum Rubber Outsole</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Multi-directional grip lugs</div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '11px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          pointerEvents: 'none',
        }}
      >
        <span>Scroll to explore anatomy</span>
        <div
          style={{
            width: '1px',
            height: '24px',
            background: 'linear-gradient(to bottom, rgba(200, 168, 122, 0.8), transparent)',
          }}
        />
      </div>
    </section>
  );
}
