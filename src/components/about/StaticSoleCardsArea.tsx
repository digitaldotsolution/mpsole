"use client"
import React from 'react'

export default function StaticSoleCardsArea() {
  return (
    <section className="services-area pt-0 pb-90" style={{ background: 'var(--primary-color)', marginTop: '-20px' }}>
      <div className="container">
        <div className="row align-items-stretch">
          {/* Static Card 06 */}
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="service-item" style={{ height: '100%', margin: 0, padding: '50px 40px' }}>
              <i className="ri-arrow-right-up-line" style={{ top: '45px', right: '35px' }}></i>
              <div style={{ display: 'flex', alignItems: 'center', minHeight: '36px', marginBottom: '25px' }}>
                <h5 style={{ 
                  margin: 0,
                  background: '#f4f3ed', 
                  color: '#111111', 
                  borderColor: 'rgba(0,0,0,0.15)',
                  display: 'inline-block',
                }}>
                  06
                </h5>
              </div>
              <h4 style={{ minHeight: '72px' }}>High-Volume Automated Injection Molding</h4>
              <p>State-of-the-art multi-station dual-color hydraulic injection and compression presses capable of 500,000+ pairs monthly with zero compound shrinkage defect.</p>
            </div>
          </div>

          {/* Static Card 07 */}
          <div className="col-lg-6 col-md-6 mb-30">
            <div className="service-item" style={{ height: '100%', margin: 0, padding: '50px 40px' }}>
              <i className="ri-arrow-right-up-line" style={{ top: '45px', right: '35px' }}></i>
              <div style={{ display: 'flex', alignItems: 'center', minHeight: '36px', marginBottom: '25px' }}>
                <h5 style={{ 
                  margin: 0,
                  background: '#f4f3ed', 
                  color: '#111111', 
                  borderColor: 'rgba(0,0,0,0.15)',
                  display: 'inline-block',
                }}>
                  07
                </h5>
              </div>
              <h4 style={{ minHeight: '72px' }}>5-Axis CNC Steel & Aluminum Mold Tooling</h4>
              <p>In-house computerized CNC mold milling with 0.02mm tolerance for intricate multi-directional outsole tread geometries and deep mud-clearing lugs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
