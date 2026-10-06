import React from 'react'
import Link from 'next/link'

export default function FooterOne() {
  return (
    <>
      <style>{`
        .main-footer .footer-main-heading,
        .main-footer .footer-top h2,
        .footer-cta-banner h2 {
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
        }
      `}</style>
      <footer className="main-footer" style={{ background: '#09090c', color: '#ffffff', paddingTop: '60px', paddingBottom: 0, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <div className="container">
          {/* Top CTA Banner */}
          <div className="footer-cta-banner footer-top text-center" style={{ paddingBottom: '50px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <p style={{ color: '#c8a87a', fontSize: 'clamp(14px, 1.5vw, 16px)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '10px' }}>
              Have a footwear sole manufacturing project in mind?
            </p>
            <h2 className="footer-main-heading" style={{ fontSize: 'clamp(32px, 5vw, 56px)', margin: '0 0 20px', fontWeight: 800, color: '#ffffff', letterSpacing: '1px' }}>
              LET'S MANUFACTURE YOUR SOLES
            </h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                href="/contact"
                className="theme-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 36px',
                  fontSize: '14px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  borderRadius: '50px',
                }}
              >
                Request B2B Quote <i className="ri-arrow-right-line" style={{ fontSize: '16px' }}></i>
              </Link>
              <a
                href="https://wa.me/923152653086"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn theme-btn-two"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 34px',
                  fontSize: '14px',
                  borderRadius: '50px',
                  background: '#25D366',
                  borderColor: '#25D366',
                  color: '#ffffff'
                }}
              >
                <i className="ri-whatsapp-line" style={{ fontSize: '18px' }}></i> WhatsApp 0315-2653086
              </a>
            </div>
          </div>

          {/* Main 4-Column Footer Content */}
          <div className="row py-50 g-4">
            {/* Col 1: About & Social */}
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-widget pe-lg-3">
                <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
                  <img
                    src="/assets/images/logos/mp-sole-white.png"
                    alt="MP Sole® - Footwear Sole Manufacturer in Pakistan"
                    style={{ height: "50px", width: "auto", display: "block" }}
                  />
                </Link>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.75', marginBottom: '22px' }}>
                  Established in 1990, MP Sole® is a shoe sole manufacturer in Pakistan specializing in footwear sole manufacturing, custom mold tooling, polymer compounding, and automated injection molding in Karachi.
                </p>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <a
                    href="https://www.facebook.com/p/MP-Sole-manufacture-61594053068516/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '18px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/mpsolemanufacture/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '18px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                  <a
                    href="https://wa.me/923152653086"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="WhatsApp"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#25D366',
                      fontSize: '18px',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <i className="ri-whatsapp-line"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Shoe Sole Categories */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget">
                <h4 style={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Sole Categories
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                  <li style={{ marginBottom: '12px' }}>
                    <Link href="/sole-types" style={{ color: '#c8a87a', fontWeight: 600, textDecoration: 'none' }}>
                      All Sole Types &amp; Molds →
                    </Link>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <Link href="/sole-types/pu-sole-gents" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                      P.U Gents Shoe Soles
                    </Link>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <Link href="/sole-types/ladies-jelly-sole" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                      Ladies Jelly Shoe Soles
                    </Link>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <Link href="/sole-types/tr-sole" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                      TR Thermoplastic Soles
                    </Link>
                  </li>
                  <li style={{ marginBottom: '12px' }}>
                    <Link href="/sole-types/medicated-sole" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', transition: 'color 0.2s' }}>
                      Medicated &amp; Orthopedic Soles
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 3: Navigation & Legal Policies */}
            <div className="col-lg-2 col-md-6 col-12">
              <div className="footer-widget">
                <h4 style={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Policies &amp; Links
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px' }}>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/about" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>About Us</Link>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/blog" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Industry Blog</Link>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/contact" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>B2B Quote</Link>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Privacy Policy</Link>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/terms-and-conditions" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Terms &amp; Conditions</Link>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/disclaimer" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Disclaimer</Link>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <Link href="/return-refund-cancellation-policy" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>Refund Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 4: Factory Address & Contact */}
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget">
                <h4 style={{ color: '#ffffff', fontSize: '17px', fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Factory &amp; Inquiries
                </h4>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                  <p style={{ marginBottom: '14px' }}>
                    <i className="ri-map-pin-2-line" style={{ color: '#c8a87a', marginRight: '8px' }}></i>
                    Plot No MIIIE-A-30-A-1, St#01 Muhammadi Rd, BLOCK-B, Shershah Colony, Karachi, Pakistan.
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <i className="ri-phone-line" style={{ color: '#c8a87a', marginRight: '8px' }}></i>
                    <a href="https://wa.me/923152653086" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>
                      +92 315 2653086
                    </a>
                  </p>
                  <p style={{ marginBottom: '18px' }}>
                    <i className="ri-time-line" style={{ color: '#c8a87a', marginRight: '8px' }}></i>
                    Mon – Sat: 9:00 AM – 7:00 PM (PKT)
                  </p>
                  <div>
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(200, 168, 122, 0.12)',
                      color: '#c8a87a',
                      border: '1px solid rgba(200, 168, 122, 0.3)',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      B2B &amp; Wholesale Supply
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Black Footer Bottom Strip */}
        <div 
          className="footer-bottom-patti" 
          style={{ 
            background: '#040406', 
            padding: '20px 0', 
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-sm-12 text-center text-lg-start mb-2 mb-lg-0">
                <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.5' }}>
                  <strong style={{ color: '#ffffff' }}>Shoe Sole Manufacturer &amp; Supplier</strong> • Custom &amp; Wholesale Sole Production
                </p>
              </div>
              <div className="col-lg-5 col-sm-12 text-center text-lg-end">
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
