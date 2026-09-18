import React from 'react'

const sole_types = [
  {
    id: 1,
    category: 'SPEED & RACING',
    specs: 'Shore 42C • 3K Carbon-Fiber • Nitrogen TPU',
    title: 'SOLE Pro Max — Carbon-Fiber Marathon Outsole',
    desc: 'Engineered for elite road racing and sub-3 marathoners. Features an integrated aerospace-grade 3K carbon propulsion plate sandwiched between dual-density nitrogen-infused foam, delivering up to 88% kinetic energy rebound with minimal muscle fatigue.',
    image: 'assets/images/soles/sole-carbon.jpg',
  },
  {
    id: 2,
    category: 'STREETWEAR & CASUAL',
    specs: 'Shore 58A • 100% Natural Rubber • Stitched Wall',
    title: 'SOLE Classic — Vulcanized Gum Rubber Cup-Sole',
    desc: 'The global standard for luxury lifestyle sneakers and vulcanized skate footwear. Molded from 100% natural gum rubber with a perimeter side-wall stitching channel, high abrasion resistance, and tested for 200,000+ continuous flex cycles without cracking.',
    image: 'assets/images/soles/sole-gum.jpg',
  },
  {
    id: 3,
    category: 'OUTDOOR & TRAIL',
    specs: 'Shore 65A • 5.0mm Geometric Lugs • Rock-Plate',
    title: 'Apex Trail 360 — Multi-Lug Wet Rock Outsole',
    desc: 'Designed for rugged mountain terrain and unpredictable weather. Aggressive 5mm multi-directional lugs channel mud and water instantly, while an embedded internal rock-guard shield protects against sharp stone punctures on technical descents.',
    image: 'assets/images/soles/sole-trail.jpg',
  },
  {
    id: 4,
    category: 'ECO SUSTAINABLE',
    specs: 'Shore 48C • 40% Recycled Crumb • Bio-Algae EVA',
    title: 'EcoBio Matrix — Circular Economy Recycled Sole',
    desc: 'Formulated for eco-conscious footwear labels. Replaces 40% of virgin petroleum polymers with recycled vehicle tire crumb and algae-based EVA foam, achieving remarkable durability and featherweight comfort with a significantly reduced carbon footprint.',
    image: 'assets/images/soles/sole-eco.jpg',
  },
]

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

          {sole_types.map((sole, index) => (
            <div key={sole.id} className="row blog-post-box align-items-center mb-50">
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-2' : ''}`}>
                <div className="blog-post-img" style={{ borderRadius: '16px', overflow: 'hidden', backgroundColor: '#09090b', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <a href="#contact">
                    <img
                      src={sole.image}
                      alt={sole.title}
                      style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s ease' }}
                    />
                  </a>
                  <div className="blog-post-category">
                    <a href="#contact">{sole.category}</a>
                  </div>
                </div>
              </div>
              <div className={`col-lg-6 ${index % 2 === 1 ? 'order-lg-1' : ''}`}>
                <div className="blog-post-caption" style={{ padding: '20px' }}>
                  <h3 style={{ color: '#c8a87a', letterSpacing: '1px', fontSize: '13px', fontWeight: 600 }}>
                    {sole.specs}
                  </h3>
                  <h2>
                    <a className="link-decoration" href="#contact">
                      {sole.title}
                    </a>
                  </h2>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6', margin: '14px 0 20px' }}>
                    {sole.desc}
                  </p>
                  <a className="theme-btn theme-btn-two" href="#contact">
                    Request Sample Mold <i className="ri-arrow-right-line"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </>
  )
}
