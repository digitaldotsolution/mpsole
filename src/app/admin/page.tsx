"use client"
import React, { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Seamless redirect to Central CRM Admin Portal
    window.location.href = '/admin/index.html';
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0f',
      color: '#ffffff',
      fontFamily: 'sans-serif'
    }}>
      <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem', marginBottom: '20px' }} />
      <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '10px' }}>Loading MP Sole® Central CRM Portal...</h2>
      <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '20px' }}>If you are not redirected automatically within a few seconds, click below:</p>
      <a 
        href="/admin/index.html" 
        className="btn btn-success rounded-pill px-4 py-2"
        style={{ textDecoration: 'none', fontWeight: 'bold' }}
      >
        Open Central Admin Cockpit →
      </a>
    </div>
  );
}
