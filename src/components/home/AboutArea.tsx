
import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Since 1990',
    count: 1990,
    cls: "",
  },
  {
    id: 2,
    title: 'Pairs Molded Monthly',
    count: 500,
    cls: "k-plus",
  },
  {
    id: 3,
    title: 'Brand Satisfaction',
    count: 99,
    cls: "percent",
  },
]

export default function AboutArea() {
  return (
    <>
      <section id="about" className="about-area" style={{ paddingTop: 'clamp(55px, 6vw, 100px)' }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title" style={{ marginTop: '8px' }}>About Us</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p style={{ fontSize: 'clamp(17px, 1.25vw, 20px)', lineHeight: '1.65' }}>
                  MP Sole® is a high-precision footwear sole compounding and contract manufacturing facility. We engineer and mold next-generation outsoles, ergonomic midsoles, and propulsion plates for global athletic brands and luxury labels worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-40">
            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">Our Vision & Philosophy</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-3s">
                <p style={{ fontSize: 'clamp(17px, 1.25vw, 20px)', lineHeight: '1.65' }}>
                  To pioneer footwear ergonomics through advanced polymer science, sustainable compounding, and zero-compromise precision tooling—turning ambitious footwear concepts into high-performance commercial reality.
                </p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s" style={{ marginTop: '55px' }}>
                {counter_data.map((item, i) => (
                  <div key={i} className="counter-item counter-text-wrap">
                    <span className={`count-text ${item.cls}`}>
                      <Count number={item.count} />
                    </span>
                    <span className="counter-title">{item.title}</span>
                  </div>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
