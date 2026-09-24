
import React from 'react'

import Link from 'next/link'

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="row align-items-center mb-2 mb-md-4 pt-20">
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
              <Link href="/" style={{ display: 'inline-block' }}>
                <img src="/assets/images/logos/mp-sole-black.png" alt="MP Sole®" style={{ height: "60px", width: "auto", display: "block" }} />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-end mt-2 mt-md-0">
              <p style={{ color: "rgba(7,7,7,0.7)", margin: 0, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.2px", fontWeight: 600 }}>High-Precision Footwear Sole Engineering</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top text-center" style={{ paddingTop: 'clamp(20px, 3.5vw, 50px)', paddingBottom: 'clamp(25px, 4vw, 55px)' }}>
                <p style={{ color: 'var(--main-color)', fontSize: 'clamp(15px, 1.8vw, 18px)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '12px' }}>
                  Have a footwear sole project in mind?
                </p>
                <h2 style={{ fontSize: 'clamp(28px, 5.5vw, 60px)', margin: 0 }}>LET'S MANUFACTURE</h2>
                <div style={{ marginTop: '22px' }}>
                  <Link
                    href="/contact"
                    className="theme-btn"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '16px 42px',
                      fontSize: '16px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      borderRadius: '50px',
                      background: '#070707',
                      color: '#ffffff',
                      border: '2px solid #070707',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    }}
                  >
                    Book Now <i className="ri-arrow-right-line" style={{ fontSize: '18px' }}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Black Footer Bottom Strip */}
        <div 
          className="footer-bottom-patti" 
          style={{ 
            background: '#070707', 
            padding: '18px 0', 
            marginTop: '25px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 text-center text-sm-start mb-2 mb-sm-0">
                <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>
                  <strong style={{ color: '#ffffff' }}>Sole Manufacturer & Supplier</strong> • Quality Soles • Wholesale & Retail Available
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 text-center text-sm-end">
                <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.5' }}>
                  © Copyright {new Date().getFullYear()} <span style={{ color: '#ffffff', fontWeight: 600 }}>MP Sole®</span>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
