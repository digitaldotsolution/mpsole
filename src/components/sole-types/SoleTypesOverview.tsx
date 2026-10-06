"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "What types of shoe soles does MP Sole® manufacture?",
    a: "MP Sole® manufactures P.U Gents soles, Ladies Jelly soles, TR soles, and Medicated soles for different footwear applications. Our manufacturing range supports men’s formal shoes, casual footwear, sneakers, women’s sandals, fashion footwear, utility shoes, and comfort-focused footwear."
  },
  {
    q: "Where is MP Sole® located?",
    a: "MP Sole® operates from Karachi, Pakistan, providing shoe sole manufacturing and supply services for footwear brands, manufacturers, wholesalers, and B2B buyers."
  },
  {
    q: "Can MP Sole® manufacture custom shoe sole designs?",
    a: "Yes. Custom shoe sole development can be provided according to design, material, size, hardness, color, tread pattern, mold, and production requirements. Project requirements should be reviewed before confirming production specifications."
  },
  {
    q: "Which sole material should I choose for my footwear?",
    a: "The appropriate sole depends on the footwear application and required properties. P.U soles are suitable for lightweight formal and casual footwear, TR soles for durable casual and utility applications, Ladies Jelly soles for women’s fashion footwear, and Medicated soles for comfort-focused and supportive footwear."
  },
  {
    q: "Do you manufacture shoe soles for wholesale and B2B orders?",
    a: "Yes. MP Sole® works with footwear brands, manufacturers, and wholesale buyers. Production quantities, tooling requirements, materials, sizes, colors, and other specifications can be discussed according to the project."
  },
  {
    q: "Can I request a custom mold or sample?",
    a: "Custom mold development and sample requirements can be discussed with the MP Sole® production team before bulk manufacturing. Availability, lead time, and minimum quantities depend on the selected sole design and production requirements."
  }
];

const productCards = [
  {
    h3: "P.U Gents Shoe Soles",
    label: "MEN'S FORMAL & CASUAL",
    desc: "Lightweight micro-cellular polyurethane soles manufactured for men’s formal shoes, executive footwear, casual shoes, and leather footwear. Designed to balance flexibility, durability, abrasion resistance, and everyday comfort.",
    features: ["Micro-Cellular P.U", "Lightweight Construction", "Flexible & Durable", "Formal & Casual Footwear"],
    cta: "Explore P.U Gents Soles",
    href: "/sole-types/pu-sole-gents",
    image: "/assets/images/soles/sole-pu-gents-1.webp"
  },
  {
    h3: "Ladies Jelly Shoe Soles",
    label: "WOMEN'S FASHION & SANDALS",
    desc: "Flexible and stylish jelly soles manufactured for women’s sandals, flats, slippers, and fashion footwear. Transparent finishes and custom color options make these soles suitable for footwear brands developing modern women’s collections.",
    features: ["Transparent Finish", "Flexible Construction", "Custom Color Options", "Sandals & Fashion Footwear"],
    cta: "Explore Ladies Jelly Soles",
    href: "/sole-types/ladies-jelly-sole",
    image: "/assets/images/soles/sole-ladies-jelly-1.webp"
  },
  {
    h3: "TR Shoe Soles",
    label: "CASUAL, ATHLETIC & UTILITY",
    desc: "Thermoplastic Rubber (TR) soles manufactured for casual shoes, sneakers, athletic footwear, utility shoes, and outdoor applications. TR soles combine flexibility, grip, abrasion resistance, and defined tread patterns for durable footwear production.",
    features: ["Thermoplastic Rubber", "High-Traction Design", "Abrasion Resistant", "Casual & Utility Footwear"],
    cta: "Explore TR Shoe Soles",
    href: "/sole-types/tr-sole",
    image: "/assets/images/soles/sole-tr-1.webp"
  },
  {
    h3: "Medicated & Orthopedic Shoe Soles",
    label: "ORTHOPEDIC & COMFORT FOOTWEAR",
    desc: "Comfort-focused Medicated soles designed for supportive and orthopedic footwear applications. Anatomical sole geometry, cushioning, and supportive construction make them suitable for footwear brands developing comfort-oriented shoe collections.",
    features: ["Anatomical Support", "Comfort Cushioning", "Supportive Construction", "Orthopedic & Comfort Footwear"],
    cta: "Explore Medicated Soles",
    href: "/sole-types/medicated-sole",
    image: "/assets/images/soles/sole-medicated-1.webp"
  }
];

const applications = [
  { title: "Men's Formal Shoes", sole: "P.U Gents Soles", icon: "ri-briefcase-line" },
  { title: "Casual Shoes", sole: "P.U & TR Soles", icon: "ri-footprint-line" },
  { title: "Sneakers", sole: "TR Soles", icon: "ri-run-line" },
  { title: "Women's Sandals", sole: "Ladies Jelly Soles", icon: "ri-t-shirt-air-line" },
  { title: "Fashion Footwear", sole: "Ladies Jelly Soles", icon: "ri-sparkles-line" },
  { title: "Utility Footwear", sole: "TR Soles", icon: "ri-tools-line" },
  { title: "Comfort Footwear", sole: "Medicated Soles", icon: "ri-heart-pulse-line" },
  { title: "Orthopedic Footwear", sole: "Medicated Soles", icon: "ri-hospital-line" },
];

export default function SoleTypesOverview() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div style={{ background: '#0a0a0d', color: '#ffffff', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section style={{
        padding: '120px 0 80px',
        background: 'linear-gradient(180deg, rgba(200,168,122,0.08) 0%, rgba(10,10,13,1) 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(200, 168, 122, 0.12)',
              color: '#c8a87a',
              border: '1px solid rgba(200, 168, 122, 0.3)',
              padding: '6px 18px',
              borderRadius: '24px',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              P.U • TR • Ladies Jelly • Medicated Soles
            </span>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '22px',
              color: '#ffffff',
              letterSpacing: '-0.5px'
            }}>
              Shoe Sole Types &amp; Manufacturing in Pakistan
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.3vw, 19px)',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '36px'
            }}>
              MP Sole® is a shoe sole manufacturer in Pakistan producing high-quality footwear soles for men’s, women’s, casual, fashion, utility, orthopedic, and comfort footwear. From our shoe sole factory in Karachi, we manufacture P.U Gents, Ladies Jelly, TR, and Medicated soles for footwear brands, manufacturers, and wholesale buyers.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="#products"
                className="theme-btn"
                style={{ padding: '14px 32px', fontSize: '15px' }}
              >
                Explore Our Sole Types <i className="ri-arrow-down-line"></i>
              </a>
              <Link
                href="/contact"
                className="theme-btn theme-btn-two"
                style={{ padding: '14px 32px', fontSize: '15px' }}
              >
                Request B2B Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RANGE INTRO */}
      <section style={{ padding: '70px 0 40px' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, marginBottom: '18px', color: '#c8a87a' }}>
              Our Shoe Sole Manufacturing Range
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)' }}>
              MP Sole® manufactures four core shoe sole categories designed for different footwear applications and production requirements. Our manufacturing capabilities include polyurethane soles, thermoplastic rubber soles, transparent jelly soles, and comfort-focused Medicated soles. Custom colors, sizes, sole designs, and mold development can also be produced according to brand requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: 4 PRODUCT CARDS */}
      <section id="products" style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div className="row g-4">
            {productCards.map((card, i) => (
              <div key={i} className="col-lg-6">
                <div style={{
                  background: 'linear-gradient(165deg, #141419 0%, #0d0d10 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)'
                }}>
                  <div style={{ background: '#070709', padding: '30px', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <img
                      src={card.image}
                      alt={`${card.h3} - MP Sole Pakistan`}
                      style={{ maxHeight: '240px', maxWidth: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <span style={{
                      display: 'inline-block',
                      color: '#c8a87a',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      marginBottom: '10px'
                    }}>
                      {card.label}
                    </span>
                    <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
                      {card.h3}
                    </h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '22px' }}>
                      {card.desc}
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '26px' }}>
                      {card.features.map((feat, fIdx) => (
                        <div key={fIdx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          background: 'rgba(255,255,255,0.03)',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          color: 'rgba(255,255,255,0.85)'
                        }}>
                          <i className="ri-check-line" style={{ color: '#c8a87a', fontSize: '16px' }}></i>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                      <Link
                        href={card.href}
                        className="theme-btn"
                        style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px 20px', fontSize: '14px' }}
                      >
                        {card.cta} <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: MANUFACTURING IN KARACHI */}
      <section style={{ padding: '80px 0', background: '#0e0e12', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span style={{ color: '#c8a87a', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', fontWeight: 600 }}>
                Footwear Sole Production Facility
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, margin: '12px 0 20px', color: '#ffffff' }}>
                Shoe Sole Manufacturing in Karachi, Pakistan
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
                Since 1990, MP Sole® has focused on footwear sole manufacturing, material formulation, mold development, and production for the footwear industry. Our Karachi manufacturing facility supports footwear brands and manufacturers looking for reliable sole production across different materials, designs, sizes, and applications.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.8)', marginBottom: '28px' }}>
                Whether you require P.U soles for men’s formal footwear, TR soles for casual and utility shoes, Jelly soles for women’s fashion footwear, or Medicated soles for comfort-focused designs, our team can help evaluate your production requirements and suitable sole formulation.
              </p>
              <Link href="/contact" className="theme-btn" style={{ padding: '12px 30px', fontSize: '14px' }}>
                Discuss Your Sole Requirements <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="col-lg-4 text-center">
              <div style={{
                background: 'linear-gradient(135deg, #18181f 0%, #101014 100%)',
                padding: '40px 30px',
                borderRadius: '16px',
                border: '1px solid rgba(200,168,122,0.25)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.5)'
              }}>
                <h3 style={{ fontSize: '42px', fontWeight: 800, color: '#c8a87a', margin: 0 }}>1990</h3>
                <p style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.7)', margin: '8px 0 20px' }}>Established in Karachi</p>
                <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '20px 0' }} />
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0 }}>
                  High-capacity polymer compounding, automated injection tooling, and custom mold engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOM SHOE SOLE MANUFACTURING */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, marginBottom: '16px', color: '#ffffff' }}>
              Custom Shoe Sole Manufacturing
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
              Need a custom sole instead of an existing design? MP Sole® works with footwear brands and manufacturers on custom shoe sole development based on design, material, size, hardness, color, tread pattern, and production requirements.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '30px 24px',
                borderRadius: '14px',
                height: '100%'
              }}>
                <i className="ri-shape-line" style={{ fontSize: '32px', color: '#c8a87a', marginBottom: '14px', display: 'block' }}></i>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px', color: '#ffffff' }}>Custom Mold Development</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Develop sole molds according to your footwear design and production specifications.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '30px 24px',
                borderRadius: '14px',
                height: '100%'
              }}>
                <i className="ri-flask-line" style={{ fontSize: '32px', color: '#c8a87a', marginBottom: '14px', display: 'block' }}></i>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px', color: '#ffffff' }}>Material &amp; Sole Formulation</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Select suitable P.U, TR, Jelly, or comfort-focused formulations according to the intended footwear application.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '30px 24px',
                borderRadius: '14px',
                height: '100%'
              }}>
                <i className="ri-palette-line" style={{ fontSize: '32px', color: '#c8a87a', marginBottom: '14px', display: 'block' }}></i>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px', color: '#ffffff' }}>Custom Colors &amp; Branding</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Develop custom colors, finishes, sizes, and branding details according to your footwear collection.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '30px 24px',
                borderRadius: '14px',
                height: '100%'
              }}>
                <i className="ri-community-line" style={{ fontSize: '32px', color: '#c8a87a', marginBottom: '14px', display: 'block' }}></i>
                <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '10px', color: '#ffffff' }}>B2B &amp; Wholesale Production</h3>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                  Production support for footwear manufacturers, brands, wholesalers, and other B2B buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY MP SOLE */}
      <section style={{ padding: '80px 0', background: '#0e0e12' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, marginBottom: '16px', color: '#ffffff' }}>
              Why Choose MP Sole® for Shoe Sole Manufacturing?
            </h2>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              { title: "Since 1990", desc: "Decades of experience in footwear sole manufacturing and production." },
              { title: "4 Core Sole Categories", desc: "P.U Gents, Ladies Jelly, TR, and Medicated sole manufacturing." },
              { title: "Karachi Manufacturing", desc: "Footwear sole production and manufacturing based in Karachi, Pakistan." },
              { title: "Custom Development", desc: "Support for custom sole designs, materials, colors, sizes, and mold requirements." },
              { title: "B2B Production", desc: "Sole manufacturing for footwear brands, manufacturers, and wholesale buyers." },
            ].map((item, idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div style={{
                  background: 'linear-gradient(160deg, #16161b 0%, #0d0d10 100%)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '32px 26px',
                  borderRadius: '14px',
                  height: '100%'
                }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#c8a87a', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FOOTWEAR APPLICATIONS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
              Footwear Applications
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>
              Our shoe sole manufacturing range supports multiple footwear categories and production requirements.
            </p>
          </div>

          <div className="row g-3">
            {applications.map((app, idx) => (
              <div key={idx} className="col-6 col-md-4 col-lg-3">
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '22px 18px',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <i className={app.icon} style={{ fontSize: '28px', color: '#c8a87a', marginBottom: '8px', display: 'inline-block' }}></i>
                  <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', marginBottom: '6px' }}>{app.title}</h4>
                  <span style={{ fontSize: '13px', color: '#c8a87a', fontWeight: 500 }}>{app.sole}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: INTERNAL LINKING */}
      <section style={{ padding: '80px 0', background: '#0e0e12' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, marginBottom: '14px', color: '#ffffff' }}>
              Explore Our Shoe Sole Categories
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)' }}>
              Direct access to our dedicated sole manufacturing specifications and compound properties.
            </p>
          </div>

          <div className="row g-4">
            {[
              { name: "P.U Gents Sole", href: "/sole-types/pu-sole-gents", img: "/assets/images/soles/sole-pu-gents-1.webp", tag: "Micro-Cellular PU" },
              { name: "Ladies Jelly Sole", href: "/sole-types/ladies-jelly-sole", img: "/assets/images/soles/sole-ladies-jelly-1.webp", tag: "Crystal Transparent" },
              { name: "TR Sole", href: "/sole-types/tr-sole", img: "/assets/images/soles/sole-tr-1.webp", tag: "Thermoplastic Rubber" },
              { name: "Medicated Sole", href: "/sole-types/medicated-sole", img: "/assets/images/soles/sole-medicated-1.webp", tag: "Orthopedic Comfort" },
            ].map((cat, idx) => (
              <div key={idx} className="col-sm-6 col-lg-3">
                <Link href={cat.href} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    background: '#131318',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    textAlign: 'center',
                    padding: '20px 16px 24px',
                    transition: 'transform 0.25s ease, border-color 0.25s ease'
                  }}>
                    <img src={cat.img} alt={cat.name} style={{ maxHeight: '140px', width: 'auto', margin: '0 auto 16px' }} />
                    <span style={{ fontSize: '11px', color: '#c8a87a', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>{cat.tag}</span>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', margin: 0 }}>{cat.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FAQS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
                Shoe Sole Manufacturing FAQs
              </h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                    style={{
                      borderRadius: '12px',
                      marginBottom: '14px',
                      background: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                      border: isOpen ? '1px solid rgba(200, 168, 122, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px'
                    }}>
                      <h4 style={{ fontSize: '17px', fontWeight: 600, color: '#ffffff', margin: 0 }}>
                        {faq.q}
                      </h4>
                      <i className={isOpen ? "ri-subtract-line" : "ri-add-line"} style={{ color: '#c8a87a', fontSize: '20px' }}></i>
                    </div>
                    {isOpen && (
                      <div style={{ padding: '0 24px 22px' }}>
                        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section style={{
        padding: '90px 0',
        background: 'linear-gradient(180deg, #101014 0%, #070709 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Ready to Manufacture Your Shoe Soles?
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>
              Whether you need P.U, TR, Ladies Jelly, Medicated, or custom shoe soles, discuss your footwear production requirements with MP Sole®.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                href="/contact"
                className="theme-btn"
                style={{ padding: '14px 34px', fontSize: '15px' }}
              >
                Request Production Quote <i className="ri-arrow-right-line"></i>
              </Link>
              <a
                href="https://wa.me/923152653086"
                target="_blank"
                rel="noopener noreferrer"
                className="theme-btn theme-btn-two"
                style={{ padding: '14px 34px', fontSize: '15px', background: '#25D366', borderColor: '#25D366', color: '#ffffff' }}
              >
                <i className="ri-whatsapp-line" style={{ marginRight: '6px' }}></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
