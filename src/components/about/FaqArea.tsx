"use client"
import React, { useState } from 'react'
import Link from 'next/link'

interface FaqItem {
  question: string
  answer: string
}

const faqData: FaqItem[] = [
  {
    question: "What sole polymers and formulations does MP Sole® manufacture?",
    answer: "We manufacture a full range of high-performance compounds including High-Density Polyurethane (PU), Ultra-Lightweight Supercritical Phylon (EVA Injection), Dual-Density TPU, Natural & Vulcanized Rubber, and Eco-Hybrid Biodegradable compounds tailored for athletic runners, luxury dress shoes, rugged boots, and safety footwear."
  },
  {
    question: "What is the Minimum Order Quantity (MOQ) for production runs?",
    answer: "For established designs in our master mold library, our standard MOQ is 500 pairs per colorway. For bespoke tooling and custom mold development projects, production pilot runs start from 1,000 to 2,500 pairs depending on sole geometry and material complexity."
  },
  {
    question: "How long does rapid prototype sampling and mold development take?",
    answer: "Initial 3D CAD modeling and functional test samples are delivered within 5 to 7 business days. Full 5-axis CNC steel and high-tensile aluminum production molds are precision-machined, tested, and trial-pressed within 18 to 25 days."
  },
  {
    question: "Can you match custom brand Pantone shades and Shore hardness durometers?",
    answer: "Yes, our in-house chemical formulation lab matches exact Pantone/RAL shades with high UV-resistance to eliminate yellowing. We also calibrate exact Shore hardness durometers (from 35C ultra-cushioning rebound to 75A high-abrasion industrial grade)."
  },
  {
    question: "Do you supply sole samples for fitment testing before bulk manufacturing?",
    answer: "Absolutely. We supply comprehensive material swatch kits, compound density samples, and pre-production sample pairs molded to your custom shoe lasts so your design team can verify fitment, bonding, and flex performance."
  }
]

export default function FaqArea() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section 
      className="faq-area" 
      style={{ 
        background: '#070707', 
        paddingTop: '100px', 
        paddingBottom: '100px',
        position: 'relative',
        color: '#ffffff'
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column: Title & Information */}
          <div className="col-lg-4 col-12 mb-50 mb-lg-0">
            <div style={{ position: 'sticky', top: '100px' }}>
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  marginBottom: '20px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', display: 'inline-block' }}></span>
                Frequently Asked Questions
              </div>

              <h2 
                style={{
                  fontFamily: 'var(--title-font)',
                  fontSize: '38px',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '18px'
                }}
              >
                Got Questions? We Have Answers.
              </h2>

              <p 
                style={{
                  color: 'rgba(255, 255, 255, 0.65)',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  marginBottom: '32px'
                }}
              >
                Explore technical answers on custom mold tooling, minimum order quantities, polymer compound choices, and global export shipping.
              </p>

              <div 
                style={{
                  padding: '26px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                <h5 style={{ color: '#ffffff', fontSize: '17px', fontWeight: 600, marginBottom: '8px' }}>
                  Need Custom Specifications?
                </h5>
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px', lineHeight: '1.6', marginBottom: '18px' }}>
                  Our footwear engineering team is available to review your 3D CAD files, lasts, and custom durometer requirements.
                </p>
                <Link 
                  href="/contact" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1.2px',
                    textDecoration: 'none',
                  }}
                >
                  <span>Talk to an Engineer</span>
                  <i className="ri-arrow-right-line" style={{ fontSize: '15px' }}></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="col-lg-8 col-12">
            <div className="faq-accordion-list">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={index}
                    onClick={() => toggleFaq(index)}
                    style={{
                      borderRadius: '14px',
                      marginBottom: '16px',
                      background: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                      border: isOpen ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(255, 255, 255, 0.08)',
                      transition: 'all 0.25s ease',
                      cursor: 'pointer',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Accordion Header */}
                    <div 
                      style={{
                        padding: '22px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        userSelect: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span 
                          style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            color: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
                            fontFamily: 'var(--title-font)',
                            minWidth: '24px'
                          }}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 
                          style={{
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#ffffff',
                            margin: 0,
                            fontFamily: 'var(--text-font)',
                            lineHeight: '1.4'
                          }}
                        >
                          {item.question}
                        </h4>
                      </div>

                      <div 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                          color: isOpen ? '#070707' : '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          transition: 'all 0.25s ease'
                        }}
                      >
                        <i 
                          className={isOpen ? "ri-subtract-line" : "ri-add-line"} 
                          style={{ fontSize: '18px', fontWeight: 700 }}
                        ></i>
                      </div>
                    </div>

                    {/* Accordion Body */}
                    <div 
                      style={{
                        maxHeight: isOpen ? '240px' : '0px',
                        opacity: isOpen ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'all 0.35s ease-in-out',
                        padding: isOpen ? '0 24px 22px 62px' : '0 24px 0 62px'
                      }}
                    >
                      <p 
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '15px',
                          lineHeight: '1.7',
                          margin: 0
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
