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
              <h4 style={{ minHeight: '72px' }}>High-Volume Injection & Medicated Soles</h4>
              <p>Commissioned computerized multi-station rotary injection molding plants and bio-engineered orthopedic Medicated Soles with anatomical arch support for therapeutic, comfort, and diabetic footwear.</p>
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
              <h4 style={{ minHeight: '72px' }}>2026: A Stable, Industry-Leading Powerhouse</h4>
              <p>Today in 2026, MP Sole® stands stable, highly respected, and technologically state-of-the-art with 5-axis CNC mold tooling, massive daily production capacity, and unshakeable customer trust across the footwear industry.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
