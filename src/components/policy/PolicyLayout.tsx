"use client";
import React from 'react';
import Link from 'next/link';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Breadcrumb from '@/components/common/Breadcrumb';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  schema: object;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, lastUpdated, schema, children }: PolicyLayoutProps) {
  return (
    <Wrapper>
      <HeaderOne />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{ background: '#0a0a0d', color: '#ffffff', minHeight: '100vh' }}>
            <Breadcrumb
              title={title}
              subtitle="Legal &amp; Compliance"
              tag="h1"
            />
            <div className="container py-60">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-9">
                  <div style={{
                    background: '#111116',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '18px',
                    padding: 'clamp(28px, 4vw, 54px)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.45)',
                  }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                      paddingBottom: '24px',
                      marginBottom: '32px',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      <span style={{
                        background: 'rgba(200, 168, 122, 0.12)',
                        color: '#c8a87a',
                        border: '1px solid rgba(200, 168, 122, 0.3)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}>
                        Official MP Sole® Policy
                      </span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: '13px' }}>
                        Last Updated: <strong style={{ color: '#ffffff' }}>{lastUpdated}</strong>
                      </span>
                    </div>

                    <div className="policy-prose" style={{
                      fontSize: '15px',
                      lineHeight: '1.85',
                      color: 'rgba(255, 255, 255, 0.85)'
                    }}>
                      {children}
                    </div>

                    <div style={{
                      marginTop: '45px',
                      paddingTop: '30px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px'
                    }}>
                      <div>
                        <h5 style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>Have questions about this policy?</h5>
                        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', margin: 0 }}>Contact our B2B production and compliance team anytime.</p>
                      </div>
                      <Link href="/contact" className="theme-btn" style={{ padding: '10px 24px', fontSize: '13px' }}>
                        Contact Us <i className="ri-arrow-right-line"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <FooterOne />
        </div>
      </div>

      <style jsx global>{`
        .policy-prose h2 {
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          margin-top: 34px;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .policy-prose h3 {
          color: #c8a87a;
          font-size: 16px;
          font-weight: 600;
          margin-top: 24px;
          margin-bottom: 8px;
        }
        .policy-prose p {
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.82);
        }
        .policy-prose ul {
          list-style: disc;
          padding-left: 24px;
          margin-bottom: 20px;
        }
        .policy-prose ul li {
          margin-bottom: 8px;
          color: rgba(255, 255, 255, 0.85);
        }
        .policy-prose strong {
          color: #ffffff;
        }
      `}</style>
    </Wrapper>
  );
}
