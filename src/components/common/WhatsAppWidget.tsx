"use client"
import React, { useState } from 'react'

interface WhatsAppWidgetProps {
  phoneNumber?: string
  defaultMessage?: string
}

export default function WhatsAppWidget({
  phoneNumber = "923001234567",
  defaultMessage = "Hello MP Sole, I am interested in footwear sole manufacturing and custom mold tooling."
}: WhatsAppWidgetProps) {
  const [isHovered, setIsHovered] = useState(false)

  const encodedMessage = encodeURIComponent(defaultMessage)
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`

  return (
    <>
      <style>{`
        @keyframes waPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.65), 0 8px 24px rgba(0, 0, 0, 0.25);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(37, 211, 102, 0), 0 8px 24px rgba(0, 0, 0, 0.25);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0), 0 8px 24px rgba(0, 0, 0, 0.25);
          }
        }
        .whatsapp-float-btn {
          animation: waPulse 2.5s infinite;
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }
        .whatsapp-float-btn:hover {
          transform: scale(1.08);
          background: #20ba59 !important;
        }
        @media (max-width: 768px) {
          .whatsapp-float-wrapper {
            bottom: 20px !important;
            left: 20px !important;
          }
          .whatsapp-float-btn {
            width: 52px !important;
            height: 52px !important;
          }
          .whatsapp-float-btn i {
            font-size: 28px !important;
          }
        }
      `}</style>
      <div 
        className="whatsapp-float-wrapper"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          pointerEvents: 'auto'
        }}
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with MP Sole on WhatsApp"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#25D366',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <i className="ri-whatsapp-fill" style={{ fontSize: '34px', lineHeight: 1 }}></i>
          
          {/* Active online green indicator badge */}
          <span 
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span 
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#10b981',
                display: 'inline-block'
              }}
            ></span>
          </span>
        </a>

        {/* Hover Tooltip Label */}
        <div
          style={{
            background: '#070707',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.5px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            whiteSpace: 'nowrap',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>Chat on WhatsApp</span>
          <i className="ri-arrow-right-line" style={{ fontSize: '14px', color: '#25D366' }}></i>
        </div>
      </div>
    </>
  )
}
