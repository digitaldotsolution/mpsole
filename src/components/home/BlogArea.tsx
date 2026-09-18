import React from 'react'
import Link from 'next/link'
import { SOLE_TYPES_DATA } from '@/data/sole_data'

export default function BlogArea() {
  return (
    <>
      <section id="sole-types" className="blog-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title wow fadeInUp delay-0-2s">
                <h2>4 Core Sole Formulations</h2>
              </div>
            </div>
          </div>

          {SOLE_TYPES_DATA.map((sole, index) => (
            <div key={sole.id} className="row blog-post-box align-items-center mb-50">
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                <div className="blog-post-img" style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Link href={`/single-project?id=${sole.id}`}>
                    <img
                      src={sole.image}
                      alt={sole.title}
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                    />
                  </Link>
                  <div className="blog-post-category">
                    <Link href={`/single-project?id=${sole.id}`}>{sole.category}</Link>
                  </div>
                </div>
              </div>
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                <div className="blog-post-caption" style={{ padding: '20px' }}>
                  <h3 style={{ color: '#c8a87a', letterSpacing: '1px', fontSize: '13px', fontWeight: 600 }}>
                    {sole.specs}
                  </h3>
                  <h2>
                    <Link className="link-decoration" href={`/single-project?id=${sole.id}`}>
                      {sole.title}
                    </Link>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', margin: '14px 0 20px' }}>
                    {sole.desc}
                  </p>
                  <Link className="theme-btn theme-btn-two" href={`/single-project?id=${sole.id}`}>
                    View Full Specifications <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}
