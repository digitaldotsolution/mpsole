"use client"
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

const initialTestimonials: Testimonial[] = [
  {
    name: "Tariq Mehmood",
    location: "Lahore, Pakistan",
    text: "We have been running continuous footwear production with MP Sole for over 4 years. The flex rebound and durability of their high-density polyurethane (PU) soles are outstanding. Across all our retail shoe collections, we have experienced zero sole delamination or material fatigue.",
    rating: 5
  },
  {
    name: "Kamran Sheikh",
    location: "Karachi, Pakistan",
    text: "The custom mold tooling precision and rapid prototype sampling are top-notch. We received exact CNC-machined sample pairs matching our 3D CAD files within just 7 business days. Upper bonding adhesion and edge deflashing are completely flawless.",
    rating: 5
  },
  {
    name: "Faisal Raza",
    location: "Faisalabad, Pakistan",
    text: "The lightweight cushioning and shock absorption of their EVA Phylon and vulcanized rubber outsoles are remarkable. Even across container-scale bulk orders of 10,000+ pairs, the weight and Shore durometer hardness remain completely uniform.",
    rating: 5
  },
  {
    name: "Bilal Ahmed Khan",
    location: "Rawalpindi, Pakistan",
    text: "Their 5-axis CNC steel mold tooling delivers unmatched tread sharpness and wet-surface grip. From heavy-duty utility boot soles to performance sneakers, MP Sole's consistent build quality and on-time shipments make them our most trusted manufacturing partner.",
    rating: 5
  }
]

export default function TestimonoalArea() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  // Form State
  const [fullName, setFullName] = useState('')
  const [location, setLocation] = useState('')
  const [reviewText, setReviewText] = useState('')
  const [selectedRating, setSelectedRating] = useState(5)
  const [hoverRating, setHoverRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderStars = (count: number = 5) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
      {[...Array(count)].map((_, i) => (
        <i 
          key={i} 
          className="ri-star-fill" 
          style={{ 
            fontSize: '18px', 
            color: '#f59e0b',
            display: 'inline-block' 
          }}
        ></i>
      ))}
    </div>
  )

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !reviewText.trim()) return

    const newReview: Testimonial = {
      name: fullName.trim(),
      location: location.trim() || "Pakistan",
      text: reviewText.trim(),
      rating: selectedRating
    }

    // Add new review to the top of list
    setTestimonials([newReview, ...testimonials])
    setIsSubmitted(true)

    // Reset and close modal after 2.2s
    setTimeout(() => {
      setIsSubmitted(false)
      setIsModalOpen(false)
      setFullName('')
      setLocation('')
      setReviewText('')
      setSelectedRating(5)
    }, 2200)
  }

  return (
    <>
      <section className="testimonials-area" style={{ position: 'relative' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>

          <div className="row align-items-stretch">
            {testimonials.map((item, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-30">
                <div 
                  className="testimonial-item wow fadeInUp delay-0-2s" 
                  style={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    margin: 0,
                    padding: '35px 30px'
                  }}
                >
                  <div>
                    {renderStars(item.rating)}
                    <div className="text" style={{ fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                      "{item.text}"
                    </div>
                  </div>
                  <div className="testi-des">
                    <h5 style={{ fontSize: '24px', letterSpacing: '0.5px' }}>{item.name}</h5>
                    <span style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Button: Write a Review */}
          <div className="row mt-20">
            <div className="col-12 text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false)
                  setIsModalOpen(true)
                }}
                className="theme-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 40px',
                  borderRadius: '50px',
                  background: '#070707',
                  color: '#ffffff',
                  border: '2px solid #070707',
                  fontSize: '15px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease'
                }}
              >
                <i className="ri-edit-2-line" style={{ fontSize: '18px' }}></i>
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Modal mounted via createPortal directly to document.body */}
      {mounted && isModalOpen && createPortal(
        <div
          onClick={() => setIsModalOpen(false)}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <style>{`
            .custom-review-modal::-webkit-scrollbar {
              width: 5px;
            }
            .custom-review-modal::-webkit-scrollbar-track {
              background: transparent;
            }
            .custom-review-modal::-webkit-scrollbar-thumb {
              background: rgba(7, 7, 7, 0.2);
              border-radius: 10px;
            }
            .custom-review-modal::-webkit-scrollbar-thumb:hover {
              background: rgba(7, 7, 7, 0.45);
            }
          `}</style>
          <div
            onClick={(e) => e.stopPropagation()}
            className="custom-review-modal"
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              maxWidth: '500px',
              width: '100%',
              padding: '26px 28px 22px 28px',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
              maxHeight: '92vh',
              overflowY: 'auto',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(7, 7, 7, 0.2) transparent',
              border: '1px solid rgba(0,0,0,0.08)'
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#f4f3ed',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '18px',
                color: '#070707',
                transition: 'background 0.2s ease'
              }}
              aria-label="Close Modal"
            >
              <i className="ri-close-line"></i>
            </button>

            {isSubmitted ? (
              /* Success State */
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <div 
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#10b981',
                    color: '#ffffff',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '30px',
                    marginBottom: '16px'
                  }}
                >
                  <i className="ri-check-line"></i>
                </div>
                <h3 style={{ fontFamily: 'var(--title-font)', fontSize: '26px', color: '#070707', marginBottom: '8px' }}>
                  Review Submitted!
                </h3>
                <p style={{ color: '#666666', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  Thank you! Your review has been submitted successfully and is now displayed live.
                </p>
              </div>
            ) : (
              /* Form State */
              <div>
                <div style={{ marginBottom: '16px' }}>
                  <span 
                    style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      color: 'rgba(7,7,7,0.55)',
                      marginBottom: '4px'
                    }}
                  >
                    // Share Your Experience
                  </span>
                  <h3 
                    style={{
                      fontFamily: 'var(--title-font)',
                      fontSize: '24px',
                      color: '#070707',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    Write a Review
                  </h3>
                </div>

                <form onSubmit={handleSubmitReview}>
                  {/* Star Rating Select */}
                  <div style={{ marginBottom: '14px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      Overall Rating *
                    </label>
                    <div style={{ display: 'flex', gap: '6px', cursor: 'pointer' }}>
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= (hoverRating || selectedRating)
                        return (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setSelectedRating(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              padding: 0,
                              cursor: 'pointer',
                              fontSize: '22px',
                              color: isFilled ? '#f59e0b' : '#e5e7eb',
                              transition: 'color 0.15s ease'
                            }}
                          >
                            <i className="ri-star-fill"></i>
                          </button>
                        )
                      })}
                      <span style={{ marginLeft: '8px', fontSize: '12px', fontWeight: 600, color: '#f59e0b', alignSelf: 'center' }}>
                        {selectedRating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Mehmood"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 14px',
                        borderRadius: '9px',
                        border: '1px solid rgba(0,0,0,0.15)',
                        background: '#f8f8f6',
                        fontSize: '13px',
                        color: '#111',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* City / State Input */}
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lahore, Pakistan"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 14px',
                        borderRadius: '9px',
                        border: '1px solid rgba(0,0,0,0.15)',
                        background: '#f8f8f6',
                        fontSize: '13px',
                        color: '#111',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Review Description */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#333', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      Review Description *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Write your review regarding sole rebound, durability, mold accuracy, delivery schedule..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '9px 14px',
                        borderRadius: '9px',
                        border: '1px solid rgba(0,0,0,0.15)',
                        background: '#f8f8f6',
                        fontSize: '13px',
                        color: '#111',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '13px',
                      borderRadius: '50px',
                      background: '#070707',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '14px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                      cursor: 'pointer',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
