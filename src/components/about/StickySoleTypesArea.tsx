"use client"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollSmoother, ScrollTrigger } from "@/plugins"

const changing_soles = [
  {
    step: "02",
    title: "Dual-Density Cushion Midsole (SOLE Pro)",
    desc: "Designed for daily training and long-distance comfort. Soft 40C landing core with a stabilized 55C perimeter frame for cloud-like impact absorption.",
  },
  {
    step: "03",
    title: "Apex Multi-Lug Rock Outsole (Trail 360)",
    desc: "Engineered for rugged mountain trails and wet terrain. Incorporates 4.5mm multi-directional cleat geometry with sticky vulcanized gum rubber compound.",
  },
  {
    step: "04",
    title: "EcoBio Matrix Sole (Recycled Polymer)",
    desc: "Sustainable high-performance compound formulated with 40% post-consumer recycled rubber and bio-derived circular elastomer resins.",
  },
  {
    step: "05",
    title: "Aero-Sprint Propulsion Chassis (Track Spec)",
    desc: "Ultra-lightweight sprint chassis featuring an integrated carbon shank and spike receiver grid engineered for instantaneous energy transfer on curves.",
  }
]

export default function StickySoleTypesArea() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.innerWidth < 992) return

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

    const wrapperEl = document.getElementById("smooth-wrapper")
    const contentEl = document.getElementById("smooth-content")
    if (wrapperEl && contentEl && !ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: wrapperEl,
        content: contentEl,
        smooth: 1.35,
        effects: true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      })
    }

    const total = changing_soles.length
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'center center',
        end: '+=2000',
        pin: true,
        pinSpacing: true,
        scrub: 0.8,
        pinType: ScrollSmoother.get() ? "transform" : "fixed",
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.floor(self.progress * total))
          setActiveIndex(idx)
        },
      })
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  const currentSole = changing_soles[activeIndex]

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="services-area"
      style={{ paddingBottom: '0px' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-black-title">
              <h2>Sole Types & Formulations</h2>
            </div>
          </div>
        </div>

        <div className="row align-items-stretch">
          {/* Card 01 - Fixed on left */}
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="service-item" style={{ height: '100%', margin: 0, padding: '50px 40px' }}>
              <i className="ri-arrow-right-up-line" style={{ top: '45px', right: '35px' }}></i>
              <div style={{ display: 'flex', alignItems: 'center', minHeight: '36px', gap: '20px', marginBottom: '25px' }}>
                <h5 style={{ margin: 0 }}>01</h5>
                <div style={{ position: 'relative', paddingLeft: '22px' }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '18px',
                    height: '1px',
                    background: '#070707',
                    display: 'inline-block'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '-3px',
                      top: '-2px',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#070707',
                      display: 'inline-block'
                    }} />
                  </span>
                  <span style={{
                    background: '#070707',
                    color: '#ffffff',
                    borderRadius: '2em',
                    padding: '5px 14px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                  }}>
                    SINCE 1990
                  </span>
                </div>
              </div>
              <h4 style={{ minHeight: '72px' }}>Carbon-Plated Kinetic Sole (SOLE Pro Max)</h4>
              <p>Engineered for elite marathon and race-day footwear. Combines an ultra-rigid 3K carbon-fiber propulsion plate with high-rebound supercritical nitrogen foam for explosive energy return on every stride.</p>
            </div>
          </div>

          {/* Cards 02 -> 03 -> 04 -> 05 Changing on scroll */}
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="service-item" style={{ height: '100%', margin: 0, padding: '50px 40px' }}>
              <i className="ri-arrow-right-up-line" style={{ top: '45px', right: '35px' }}></i>
              <div 
                key={currentSole.step}
                style={{
                  animation: 'smoothCardFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', minHeight: '36px', marginBottom: '25px' }}>
                  <h5 style={{ 
                    margin: 0,
                    background: '#070707', 
                    color: '#ffffff', 
                    borderColor: '#070707',
                    display: 'inline-block',
                  }}>
                    {currentSole.step}
                  </h5>
                </div>
                <h4 style={{ minHeight: '72px' }}>{currentSole.title}</h4>
                <p>{currentSole.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes smoothCardFade {
          0% {
            opacity: 0.15;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
