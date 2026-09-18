
import React from 'react'

import Link from 'next/link'

export default function FooterOne() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row align-items-center mb-40 pt-20">
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-start">
              <Link href="/" style={{ display: 'inline-block' }}>
                <img src="/assets/images/logos/mp-sole-black.png" alt="MP Sole®" style={{ height: "60px", width: "auto", display: "block" }} />
              </Link>
            </div>
            <div className="col-lg-6 col-md-6 col-12 text-center text-md-end mt-3 mt-md-0">
              <p style={{ color: "rgba(7,7,7,0.7)", margin: 0, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1.2px", fontWeight: 600 }}>High-Precision Footwear Sole Engineering</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top text-center" style={{ paddingTop: '80px', paddingBottom: '70px' }}>
                <p style={{ color: 'var(--main-color)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '16px' }}>
                  Have a footwear sole project in mind?
                </p>
                <h2>LET'S MANUFACTURE</h2>
                <div style={{ marginTop: '28px' }}>
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
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <p className="copy-left-text">Engineered by <a href="/">MP Sole® Manufacturing</a></p>
            </div>
            <div className="col-lg-6 col-sm-6">
              <p className="copy-right-text"> © Copyright {new Date().getFullYear()} MP Sole®. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
