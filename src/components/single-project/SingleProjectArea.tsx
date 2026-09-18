"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import ImagePopup from '@/modals/ImagePopup';
import { SoleType, SOLE_TYPES_DATA } from '@/data/sole_data';

interface Props {
  sole: SoleType;
}

export default function SingleProjectArea({ sole }: Props) {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);

  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const images = sole.gallery;

  return (
    <>
      <div className="single-project-page-design">
        {/* Main Hero Sole Image */}
        <div className="single-project-image" style={{ background: '#09090b', padding: '40px 0', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="container">
            <img
              src={sole.image}
              alt={sole.title}
              style={{
                maxHeight: '520px',
                width: 'auto',
                maxWidth: '100%',
                margin: '0 auto',
                display: 'block',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>

        {/* 4 Sole Types Quick Switcher Bar */}
        <div style={{ background: '#111113', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '16px 0' }}>
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              <span style={{ fontSize: '13px', color: '#c8a87a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                All 4 Formulations:
              </span>
              {SOLE_TYPES_DATA.map((item) => (
                <Link
                  key={item.id}
                  href={`/sole-types/${item.slug}`}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '24px',
                    fontSize: '13px',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    background: item.id === sole.id ? '#c8a87a' : 'rgba(255,255,255,0.06)',
                    color: item.id === sole.id ? '#000' : '#fff',
                    border: item.id === sole.id ? '1px solid #c8a87a' : '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specs & Details */}
        <div className="container pt-60 pb-40">
          <div className="row g-4">
            {/* Sidebar Specifications */}
            <div className="col-lg-4">
              <div
                className="single-project-page-left wow fadeInUp delay-0-2s"
                style={{
                  background: 'linear-gradient(160deg, #16161b 0%, #0d0d10 100%)',
                  padding: '36px 30px',
                  borderRadius: '18px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8a87a', display: 'inline-block' }}></span>
                  <span style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '2px', color: '#c8a87a', fontWeight: 700 }}>
                    Technical Specifications
                  </span>
                </div>

                <div className="single-info mb-20" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.2px', color: '#c8a87a', marginBottom: '4px', fontWeight: 600 }}>Category</p>
                  <h3 style={{ fontSize: '18px', margin: 0, color: '#ffffff', fontWeight: 600 }}>{sole.category}</h3>
                </div>

                <div className="single-info mb-20" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.2px', color: '#c8a87a', marginBottom: '4px', fontWeight: 600 }}>Hardness / Durometer</p>
                  <h3 style={{ fontSize: '16px', margin: 0, color: '#ffffff', fontWeight: 500 }}>{sole.durometer}</h3>
                </div>

                <div className="single-info mb-20" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.2px', color: '#c8a87a', marginBottom: '4px', fontWeight: 600 }}>Compounding Matrix</p>
                  <h3 style={{ fontSize: '15px', margin: 0, color: '#ffffff', fontWeight: 500 }}>{sole.material}</h3>
                </div>

                <div className="single-info mb-20" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.2px', color: '#c8a87a', marginBottom: '4px', fontWeight: 600 }}>Kinetic Rebound</p>
                  <h3 style={{ fontSize: '16px', margin: 0, color: '#ffffff', fontWeight: 500 }}>{sole.energyRebound}</h3>
                </div>

                <div className="single-info mb-20" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '14px' }}>
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.2px', color: '#c8a87a', marginBottom: '4px', fontWeight: 600 }}>Production MOQ</p>
                  <h3 style={{ fontSize: '16px', margin: 0, color: '#ffffff', fontWeight: 500 }}>{sole.moq}</h3>
                </div>

                <div className="single-info mb-20">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1.2px', color: '#c8a87a', marginBottom: '4px', fontWeight: 600 }}>Tooling Lead Time</p>
                  <h3 style={{ fontSize: '16px', margin: 0, color: '#ffffff', fontWeight: 500 }}>{sole.leadTime}</h3>
                </div>

                <div style={{ paddingTop: '10px' }}>
                  <a
                    className="theme-btn"
                    href="/#contact"
                    style={{ width: '100%', textAlign: 'center', display: 'block', padding: '12px 18px', fontSize: '13px' }}
                  >
                    Inquire For This Sole
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Description */}
            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s" style={{ paddingLeft: '10px' }}>
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(200, 168, 122, 0.12)',
                    color: '#c8a87a',
                    border: '1px solid rgba(200, 168, 122, 0.3)',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  {sole.specs}
                </span>

                <h2 style={{ fontSize: '34px', lineHeight: '1.25', marginBottom: '22px', color: '#ffffff', fontWeight: 700 }}>
                  {sole.title}
                </h2>

                <p style={{ fontSize: '17px', lineHeight: '1.75', color: 'rgba(255,255,255,0.9)', marginBottom: '18px' }}>
                  {sole.desc}
                </p>

                <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(255,255,255,0.7)', marginBottom: '32px' }}>
                  {sole.detailedDesc}
                </p>

                {/* Key Engineering Features */}
                <h4 style={{ fontSize: '18px', marginBottom: '18px', color: '#c8a87a', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>
                  Engineering Highlights:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginBottom: '36px' }}>
                  {sole.features.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '14px 18px',
                        borderRadius: '10px',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      <i className="ri-checkbox-circle-fill" style={{ color: '#c8a87a', fontSize: '18px', flexShrink: 0 }}></i>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="d-flex flex-wrap gap-3">
                  <a className="theme-btn" href="/#contact">
                    Request Mold Sample & RFQ <i className="ri-arrow-right-line"></i>
                  </a>
                  <a className="theme-btn theme-btn-two" href="/#sole-types">
                    View All Sole Types
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sole Gallery Section */}
          <div className="row pt-60">
            <div className="col-12 mb-30 text-center">
              <h3 style={{ fontSize: '24px' }}>High-Precision Molding Gallery</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Click on any image to inspect high-resolution mold details</p>
            </div>
            {sole.gallery.map((imgUrl, i) => (
              <div key={i} className="col-lg-6 mb-30">
                <a
                  style={{ cursor: "pointer", display: 'block' }}
                  onClick={() => handleImagePopup(i)}
                  className="work-popup"
                >
                  <div className="single-image wow fadeInUp delay-0-2s" style={{ borderRadius: '16px', overflow: 'hidden', background: '#09090b', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img
                      src={imgUrl}
                      alt={`${sole.shortTitle} gallery ${i + 1}`}
                      style={{ width: '100%', height: '340px', objectFit: 'contain', display: 'block', padding: '20px' }}
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {isOpen && photoIndex !== null && (
        <ImagePopup
          images={images}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  )
}
