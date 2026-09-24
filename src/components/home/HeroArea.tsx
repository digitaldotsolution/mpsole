"use client"
import React, { useState, useEffect } from 'react'

const SOLE_TYPES_LIST = [
  "Pio Sole Gents",
  "Ladies Jelly Sole",
  "T.R Sole",
  "Medicated Sole"
];

export default function HeroArea() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = SOLE_TYPES_LIST[currentTextIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing phase
      if (displayedText.length < fullText.length) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 60);
      } else {
        // Pause at complete text before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting phase
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        }, 30);
      } else {
        // Move to next text and start typing
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % SOLE_TYPES_LIST.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2 style={{
                  fontSize: 'clamp(46px, 10.5vw, 145px)',
                  lineHeight: '1.05',
                  letterSpacing: '-1.5px',
                  marginBottom: '10px',
                }}>
                  MP SOLE®
                </h2>
                <h4 className="hero-sole-title">
                  <span className="static-prefix" style={{ color: '#1a1a1a' }}>
                    SOLE FORMULATION —
                  </span>
                  <span className="dynamic-typed" style={{ color: '#8c6b38' }}>
                    {displayedText}
                    <span
                      style={{
                        display: 'inline-block',
                        width: '3px',
                        height: '1em',
                        backgroundColor: '#8c6b38',
                        marginLeft: '3px',
                        verticalAlign: 'middle',
                        animation: 'blinkCursor 0.8s infinite',
                      }}
                    />
                  </span>
                </h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-3 hero-flags-col">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img
                        className="img-fluid"
                        src="/assets/images/avatar/cn.svg"
                        alt="China"
                        title="China"
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.12)' }}
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="/assets/images/avatar/gb.svg"
                        alt="United Kingdom"
                        title="United Kingdom"
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.12)' }}
                      />
                    </li>
                    <li>
                      <img
                        className="img-fluid"
                        src="/assets/images/avatar/pk.svg"
                        alt="Pakistan"
                        title="Pakistan"
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.12)' }}
                      />
                    </li>
                  </ul>
                  <div className="reviews">
                    <div style={{ whiteSpace: 'nowrap', fontSize: 'clamp(14px, 1.1vw, 17px)', fontWeight: 500, color: 'var(--main-color)' }}>
                      25+ Global Brands <span style={{ color: '#888', whiteSpace: 'nowrap' }}>(5 of 5)</span>
                    </div>
                    <p style={{ whiteSpace: 'normal' }}>
                      Trusted by athletic, trail, and luxury footwear brands worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/images/about/hero-sole.webp" alt="MP SOLE®" />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Engineered for stride. Obsessed with detail. High-precision outsoles, dual-density midsoles, and carbon propulsion plates by MP Sole®.</p>
                <a className="theme-btn" href="#contact">Request Production Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
