
"use client"
import React, { useState } from 'react'

export default function ContactArea() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('100-500');
  const [soleType, setSoleType] = useState('sole-pro-max');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, quantity, soleType, subject, message });
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
                  <p>Jurain,Dhaka Bangladesh</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                  <span className="circle-btn">
                    <i className="ri-headphone-line"></i>
                  </span>
                  <h2>contact number:</h2>
                  <p>+1234321321</p>
                </div>


                <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                  <span className="circle-btn">
                    <i className="ri-mail-line"></i>
                  </span>
                  <h2>Email us:</h2>
                  <p>websitename@mail.com</p>
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
                          <option value="sole-pro-max">SOLE Pro Max (Carbon-Plate + High-Rebound TPU)</option>
                          <option value="sole-pro">SOLE Pro (Dual-Density Bio-EVA Cushioning)</option>
                          <option value="sole-classic">SOLE Classic (Abrasion-Resistant Gum Rubber)</option>
                          <option value="custom-mold">Custom CNC Mold & Durometer Compounding</option>
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
                          placeholder="e.g. Inquiry for Spring 2027 Trail Runner Outsole Mold"
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
                          placeholder="Provide target durometer (Shore A), upper bonding requirements, 3D CAD status, and timeline..."
                          required
                          data-error="Please Write your Message"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn">
                          Request Production Quote <i className="ri-mail-line"></i>
                        </button>
                        <div id="msgSubmit" className="hidden"></div>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <p className="input-success">We have received your production request, our lab team will review your specs within 24 hours!</p>
                      <p className="input-error">Sorry, Message could not send! Please try again.</p>
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
