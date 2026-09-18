import React from 'react'

export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>MP SOLE®</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/01.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/02.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/03.jpg" alt="client" />
                    </li>
                  </ul>
                  <div className="reviews">
                    50+ Global Brands <span>(4.98 of 5)</span>
                    <p>Trusted by athletic, trail, and luxury footwear brands worldwide.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/images/about/hero-sole.jpg" alt="MP SOLE®" />
              </div>
            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Engineered for stride. Obsessed with detail. High-precision outsoles, dual-density midsoles, and carbon propulsion plates by MP Sole®.</p>
                <a className="theme-btn" href="#contact">Request Production Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
