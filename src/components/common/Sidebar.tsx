
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
          </div>
        </div>
      </div>
      <div className={`body-overlay ${open ? 'opened' : ''}`} onClick={() => setOpen(false)}></div>

    </>
  )
}
