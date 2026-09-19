
"use client"
import React, { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function ContactArea() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('100-500');
  const [soleType, setSoleType] = useState('Pio Sole Gents');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 1. Save lead into Firebase Firestore database
      await addDoc(collection(db, 'inquiries'), {
        name: name.trim(),
        email: email.trim(),
        quantity,
        soleType,
        subject: subject.trim(),
        message: message.trim(),
        status: 'New',
        createdAt: new Date().toISOString(),
        timestamp: serverTimestamp(),
      });

      // 2. Dispatch email alert to admin via Formspree
      try {
        await fetch('https://formspree.io/f/mrpbbwvg', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            orderQuantity: quantity,
            soleFormulation: soleType,
            subject: subject.trim(),
            message: message.trim(),
            _subject: `New Production Inquiry: ${subject.trim()} from ${name.trim()}`,
          }),
        });
      } catch (formspreeErr) {
        console.warn('Formspree dispatch error:', formspreeErr);
      }

      setSubmitStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div className="section-title section-black-title wow fadeInUp delay-0-2s">
                <h2>Request a Production Run</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="contact-content-part  wow fadeInUp delay-0-2s">

                <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
                  <span className="circle-btn">
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <h2>our office:</h2>
                  <p>MP Sole® Precision Manufacturing Park</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                  <span className="circle-btn">
                    <i className="ri-headphone-line"></i>
                  </span>
                  <h2>contact number:</h2>
                  <p>+1 (800) 520-SOLE</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <span className="circle-btn">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h2>Email us:</h2>
                  <p>contact@mpsole.com</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <h2>Socials</h2>
                  <div className="about-social">
                    <ul>
                      <li><a target='_blank' href="https://facebook.com"><i className="ri-facebook-circle-fill"></i></a></li>
                      <li><a target='_blank' href="https://twitter.com"><i className="ri-twitter-x-line"></i></a></li>
                      <li><a target='_blank' href="https://linkedin.com"><i className="ri-linkedin-fill"></i></a></li>
                      <li><a target='_blank' href="https://github.com/jamilrayhan10"><i className="ri-github-line"></i></a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div> 

            <div className="col-lg-8">
              <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Full Name / Brand Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Acme Footwear Lab"
                          required
                          data-error="Please enter your Name"
                        />
                        <label htmlFor="name" className="for-icon"><i className="far fa-user"></i></label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Business Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sourcing@brand.com"
                          required
                          data-error="Please enter your Email"
                        />
                        <label htmlFor="email" className="for-icon"><i className="far fa-envelope"></i></label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="quantity">Order Quantity (Minimum 100 Pairs)</label>
                        <select
                          id="quantity"
                          className="form-control"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          style={{ backgroundColor: '#18181b', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}
                        >
                          <option value="100-500">Pilot / Sample Batch (100 - 500 Pairs)</option>
                          <option value="1000-5000">Commercial Production (1,000 - 5,000 Pairs)</option>
                          <option value="5000-20000">Volume Manufacturing (5,000 - 20,000 Pairs)</option>
                          <option value="20000+">Enterprise Bulk (20,000+ Pairs)</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="soleType">Sole Formulation & Material</label>
                        <select
                          id="soleType"
                          className="form-control"
                          value={soleType}
                          onChange={(e) => setSoleType(e.target.value)}
                          style={{ backgroundColor: '#18181b', color: '#ffffff', border: '1px solid rgba(255,255,255,0.15)' }}
                        >
                          <option value="Pio Sole Gents">Pio Sole Gents (Micro-Cellular PU)</option>
                          <option value="Ladies Jelly Sole">Ladies Jelly Sole (Crystal PVC Compound)</option>
                          <option value="T.R Sole">T.R Sole (High-Traction Thermoplastic Rubber)</option>
                          <option value="Medicated Sole">Medicated Sole (Orthopedic Cushion & Arch Support)</option>
                          <option value="Custom Tooling / Formulation">Custom Tooling / Custom Formulation</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject / Project Title</label>
                        <input
                          type="text"
                          id="subject"
                          className="form-control"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="e.g. Inquiry for Gents Formal PU Outsole Production"
                          required
                          data-error="Please enter your Subject"
                        />
                        <label htmlFor="subject" className="for-icon"><i className="far fa-user"></i></label>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">Production Specifications & Details</label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Provide target durometer (Shore A), upper bonding requirements, mold size range, and target delivery..."
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button 
                          type="submit" 
                          className="theme-btn" 
                          disabled={isSubmitting}
                          style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                        >
                          {isSubmitting ? (
                            <>
                              Sending Request... <i className="ri-loader-4-line" style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}></i>
                            </>
                          ) : (
                            <>
                              Request Production Quote <i className="ri-mail-line"></i>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                    <div className="col-md-12" style={{ marginTop: '16px' }}>
                      {submitStatus === 'success' && (
                        <div style={{
                          background: 'rgba(34, 197, 94, 0.15)',
                          border: '1px solid #22c55e',
                          color: '#4ade80',
                          padding: '14px 20px',
                          borderRadius: '10px',
                          fontSize: '14px',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}>
                          <i className="ri-checkbox-circle-fill" style={{ fontSize: '20px' }}></i>
                          <span>Thank you! Your production request has been recorded in our system. Our engineering lab will contact you within 24 hours.</span>
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div style={{
                          background: 'rgba(239, 68, 68, 0.15)',
                          border: '1px solid #ef4444',
                          color: '#f87171',
                          padding: '14px 20px',
                          borderRadius: '10px',
                          fontSize: '14px',
                          fontWeight: 500,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                        }}>
                          <i className="ri-error-warning-fill" style={{ fontSize: '20px' }}></i>
                          <span>Sorry, could not submit at this moment. Please check your internet connection or email us directly at contact@mpsole.com.</span>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
