
import MobileMenu from '@/layouts/headers/MobileMenu'
import React from 'react'

export default function Sidebar({ open, setOpen }: any) {
  return (
    <>
      <div className={`sidebar__area ${open ? 'sidebar-opened' : ''}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close">
            <button className="sidebar__close-btn" id="sidebar__close-btn" onClick={() => setOpen(false)}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content mt-40 mb-20">
            <div className="sidebar__logo mb-30">
              <a href="/"><img src="/assets/images/logos/mp-sole-white.png" alt="MP Sole®" style={{ height: "45px", width: "auto" }} /></a>
            </div>
            <div className="mobile-menu fix mean-container">
              <MobileMenu />
            </div>
            <div className="sidebar__contact mt-30 pt-20" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: '#ffffff', fontSize: '13px', marginBottom: '12px', lineHeight: '1.6' }}>
                <i className="ri-map-pin-2-fill" style={{ color: '#8c6b38', marginRight: '6px' }}></i>
                Plot No MIIIE-A-30-A-1, St#01 Muhammadi Rd, BLOCK-B, Shershah Colony, Karachi.
              </div>
              <div style={{ marginBottom: '16px' }}>
                <a 
                  href="https://wa.me/923152653086" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#25D366', fontSize: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <i className="ri-whatsapp-fill" style={{ fontSize: '18px' }}></i>
                  0315-2653086
                </a>
              </div>
              <div className="sidebar__social" style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href="https://www.facebook.com/mpsolemaufacture" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Facebook"
                  style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a 
                  href="https://www.instagram.com/mpsolemanufacture/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Instagram"
                  style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${open ? 'opened' : ''}`} onClick={() => setOpen(false)}></div>

    </>
  )
}
