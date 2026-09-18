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
                  href={`/single-project?id=${item.id}`}
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
          <div className="row">
            {/* Sidebar Specifications */}
            <div className="col-lg-4">
              <div className="single-project-page-left wow fadeInUp delay-0-2s" style={{ background: 'var(--lighter-color)', padding: '36px 30px', borderRadius: '16px' }}>
                <div className="single-info mb-20">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', color: '#c8a87a', marginBottom: '4px' }}>Category</p>
                  <h3 style={{ fontSize: '18px', margin: 0 }}>{sole.category}</h3>
                </div>
                <div className="single-info mb-20">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', color: '#c8a87a', marginBottom: '4px' }}>Hardness / Durometer</p>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{sole.durometer}</h3>
                </div>
                <div className="single-info mb-20">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', color: '#c8a87a', marginBottom: '4px' }}>Compounding Matrix</p>
                  <h3 style={{ fontSize: '15px', margin: 0 }}>{sole.material}</h3>
                </div>
                <div className="single-info mb-20">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', color: '#c8a87a', marginBottom: '4px' }}>Kinetic Rebound</p>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{sole.energyRebound}</h3>
                </div>
                <div className="single-info mb-20">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', color: '#c8a87a', marginBottom: '4px' }}>Production MOQ</p>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{sole.moq}</h3>
                </div>
                <div className="single-info">
                  <p style={{ textTransform: 'uppercase', fontSize: '11px', letterSpacing: '1px', color: '#c8a87a', marginBottom: '4px' }}>Tooling Lead Time</p>
                  <h3 style={{ fontSize: '16px', margin: 0 }}>{sole.leadTime}</h3>
                </div>
              </div>
            </div>

            {/* Right Column Description */}
            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s" style={{ paddingLeft: '15px' }}>
                <span style={{ display: 'inline-block', background: 'rgba(200, 168, 122, 0.15)', color: '#c8a87a', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, letterSpacing: '1px', marginBottom: '14px' }}>
                  {sole.specs}
                </span>
                <h2 style={{ fontSize: '32px', lineHeight: '1.25', marginBottom: '20px' }}>
                  {sole.title}
                </h2>
                <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(255,255,255,0.85)', marginBottom: '18px' }}>
                  {sole.desc}
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>
                  {sole.detailedDesc}
                </p>

                {/* Key Engineering Features */}
                <h4 style={{ fontSize: '18px', marginBottom: '16px', color: '#c8a87a', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Engineering Highlights:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {sole.features.map((feature, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '15px', color: 'rgba(255,255,255,0.85)' }}>
                      <i className="ri-checkbox-circle-fill" style={{ color: '#c8a87a', fontSize: '18px' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-3">
                  <a className="theme-btn" href="/#contact">
                    Request Mold Sample & RFQ <i className="ri-arrow-right-line"></i>
                  </a>
                  <a className="theme-btn theme-btn-two" href="/#sole-types">
                    View All Soles
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
