
import React from 'react'
import Count from '../common/Count'

const counter_data = [
  {
    id: 1,
    title: 'Years Of Lab R&D',
    count: 15,
    cls: "plus",
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
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-sm-3">
              <h2 className="about-pre-title">About Us</h2>
            </div>
            <div className="col-lg-9 col-sm-9">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>We are a high-precision footwear sole compounding and contract manufacturing facility. We engineer and mold next-generation outsoles, ergonomic midsoles, and propulsion plates for global athletic brands, luxury sneaker labels, and boutique designers worldwide. From custom CNC aluminum tooling to Shore-A durometer tuning, we bring 3D footwear concepts into mass commercial production with zero delamination.</p>
              </div>
              <div className="hero-counter-area d-flex justify-content-between wow fadeInUp delay-0-4s">
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
