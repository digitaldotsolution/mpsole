
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
              <h2 className="about-pre-title" style={{ marginTop: '8px' }}>About MP Sole® – Shoe Sole Manufacturer in Karachi</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p style={{ fontSize: 'clamp(17px, 1.25vw, 20px)', lineHeight: '1.65' }}>
                  Established in 1990, MP Sole® is a shoe sole manufacturer in Pakistan specializing in footwear sole manufacturing, custom mold tooling, polymer compounding, and automated injection molding. From our shoe sole factory in Karachi, we manufacture and supply PU soles, TR soles, Ladies Jelly soles, and Medicated soles for footwear brands, manufacturers, and wholesale buyers across Pakistan and international markets.
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
