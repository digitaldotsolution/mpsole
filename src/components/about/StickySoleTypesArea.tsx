"use client"
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollSmoother, ScrollTrigger } from "@/plugins"

const changing_soles = [
  {
    step: "02",
    title: "Building Trust & Formulation Mastery",
    desc: "Through relentless dedication in the 1990s, we perfected our proprietary rubber and polymer blends. Footwear makers across the region trusted our soles for zero-cracking resilience and superior wear life.",
  },
  {
    step: "03",
    title: "Pioneering Gents Pio & T.R Soles",
    desc: "Recognizing the need for modern formal and rugged footwear, we developed dedicated Gents Pio (PU) and Thermoplastic Rubber (TR) formulations, setting new industry standards for grip and all-weather flexibility.",
  },
  {
    step: "04",
    title: "Investing in Advanced Machinery",
    desc: "Upgraded our factory with heavy-duty hydraulic presses, automated batch compounders, and temperature-controlled curing systems. This technological leap scaled our production while maintaining flawless unit consistency.",
  },
  {
    step: "05",
    title: "Fashion Expansion & Ladies Jelly Soles",
    desc: "Expanded into high-fashion footwear with crystal-transparent jelly compounds and optical UV inhibitors, becoming the preferred sole manufacturer for leading ladies' sandals and trendy brands.",
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
        onUpdate: (self: any) => {
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
              <h2 style={{
                fontSize: 'clamp(22px, 3.1vw, 44px)',
                lineHeight: '1.2',
                marginBottom: '20px',
                letterSpacing: '0.5px'
              }}>
                <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                  Our Manufacturing Journey (1990 – Present)
                </span>
              </h2>
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
              <h4 style={{ minHeight: '72px' }}>1990: Founded by Salahuddin</h4>
              <p>Established in 1990 by Founder Salahuddin with deep passion for shoe craftsmanship. What began as a dedicated footwear sole workshop quickly earned an industry reputation for honesty, master compounding, and unbreakable sole durability.</p>
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
