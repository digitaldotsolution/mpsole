"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { db } from '@/lib/firebase'
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  addDoc,
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore'

interface Inquiry {
  id: string
  name: string
  email: string
  quantity: string
  soleType: string
  subject: string
  message: string
  status?: string
  createdAt?: string
}

interface AdminTestimonial {
  id: string
  name: string
  location: string
  text: string
  rating: number
  status: string
  createdAt?: string
}

export default function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  // Active Tab
  const [activeTab, setActiveTab] = useState<'leads' | 'testimonials'>('leads')

  // Leads Data
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  // Testimonials Data
  const [testimonials, setTestimonials] = useState<AdminTestimonial[]>([])
  const [isAddTestimonialOpen, setIsAddTestimonialOpen] = useState(false)
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    location: '',
    text: '',
    rating: 5,
  })

  // Check existing session
  useEffect(() => {
    const session = sessionStorage.getItem('mp_sole_admin_logged')
    if (session === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  // Subscribe to Realtime Inquiries
  useEffect(() => {
    if (!isAuthenticated) return

    try {
      const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const list: Inquiry[] = []
        snapshot.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...(docSnap.data() as any) })
        })
        setInquiries(list)
      }, (err) => {
        console.warn('Inquiries listener error:', err)
      })

      return () => unsubscribe()
    } catch (e) {
      console.warn('Realtime inquiries error:', e)
    }
  }, [isAuthenticated])

  // Subscribe to Realtime Testimonials
  useEffect(() => {
    if (!isAuthenticated) return

    try {
      const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'))
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const list: AdminTestimonial[] = []
        snapshot.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...(docSnap.data() as any) })
        })
        setTestimonials(list)
      }, (err) => {
        console.warn('Testimonials listener error:', err)
      })

      return () => unsubscribe()
    } catch (e) {
      console.warn('Realtime testimonials error:', e)
    }
  }, [isAuthenticated])

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (
      (username.trim() === 'admin' || username.trim() === 'admin@mpsole.com') &&
      password === 'mpsole1990'
    ) {
      setIsAuthenticated(true)
      sessionStorage.setItem('mp_sole_admin_logged', 'true')
      setLoginError('')
    } else {
      setLoginError('Invalid credentials. Please use username: admin & password: mpsole1990')
    }
  }

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('mp_sole_admin_logged')
  }

  // Update Inquiry Status
  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await updateDoc(doc(db, 'inquiries', id), { status: newStatus })
    } catch (e) {
      console.error('Error updating status:', e)
    }
  }

  // Delete Inquiry
  const handleDeleteInquiry = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return
    try {
      await deleteDoc(doc(db, 'inquiries', id))
      if (selectedInquiry?.id === id) setSelectedInquiry(null)
    } catch (e) {
      console.error('Error deleting lead:', e)
    }
  }

  // Toggle Testimonial Status
  const handleToggleTestimonialStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'approved' ? 'hidden' : 'approved'
    try {
      await updateDoc(doc(db, 'testimonials', id), { status: newStatus })
    } catch (e) {
      console.error('Error updating testimonial status:', e)
    }
  }

  // Delete Testimonial
  const handleDeleteTestimonial = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this testimonial?')) return
    try {
      await deleteDoc(doc(db, 'testimonials', id))
    } catch (e) {
      console.error('Error deleting testimonial:', e)
    }
  }

  // Add New Testimonial
  const handleAddTestimonial = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTestimonial.name.trim() || !newTestimonial.text.trim()) return

    try {
      await addDoc(collection(db, 'testimonials'), {
        name: newTestimonial.name.trim(),
        location: newTestimonial.location.trim() || 'Pakistan',
        text: newTestimonial.text.trim(),
        rating: Number(newTestimonial.rating) || 5,
        status: 'approved',
        createdAt: new Date().toISOString(),
        timestamp: serverTimestamp(),
      })

      setNewTestimonial({ name: '', location: '', text: '', rating: 5 })
      setIsAddTestimonialOpen(false)
    } catch (e) {
      console.error('Error adding testimonial:', e)
    }
  }

  // Filtered inquiries
  const filteredInquiries = inquiries.filter((item) => {
    const q = searchQuery.toLowerCase()
    return (
      (item.name || '').toLowerCase().includes(q) ||
      (item.email || '').toLowerCase().includes(q) ||
      (item.soleType || '').toLowerCase().includes(q) ||
      (item.subject || '').toLowerCase().includes(q)
    )
  })

  // ----------------------------------------------------
  // LOGIN SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#09090b',
        color: '#f4f4f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          background: '#141417',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '16px',
          padding: '40px',
          width: '100%',
          maxWidth: '420px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              background: 'rgba(200, 168, 122, 0.15)',
              color: '#c8a87a',
              fontSize: '24px',
              marginBottom: '16px',
              border: '1px solid rgba(200, 168, 122, 0.3)'
            }}>
              <i className="ri-shield-user-line"></i>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 6px', color: '#fff' }}>
              MP Sole® Admin CRM
            </h2>
            <p style={{ color: '#a1a1aa', fontSize: '13px', margin: 0 }}>
              Lead Management & Production Dashboard
            </p>
          </div>

          {loginError && (
            <div style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid #ef4444',
              color: '#f87171',
              padding: '12px 16px',
              borderRadius: '8px',
              fontSize: '13px',
              marginBottom: '20px'
            }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '18px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#d4d4d8', marginBottom: '6px' }}>
                Username / Email
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#1c1c21',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#d4d4d8', marginBottom: '6px' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  background: '#1c1c21',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                background: '#c8a87a',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Sign In to CRM
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Link href="/" style={{ color: '#71717a', fontSize: '13px', textDecoration: 'none' }}>
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ----------------------------------------------------
  // DASHBOARD CRM MAIN VIEW
  // ----------------------------------------------------
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0c',
      color: '#f4f4f5',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Top Navbar */}
      <header style={{
        background: '#121215',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '16px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            background: 'rgba(200, 168, 122, 0.2)',
            color: '#c8a87a',
            padding: '8px 12px',
            borderRadius: '8px',
            fontWeight: 800,
            fontSize: '16px',
            letterSpacing: '1px'
          }}>
            MP SOLE®
          </div>
          <div>
            <h1 style={{ fontSize: '17px', fontWeight: 700, margin: 0, color: '#fff' }}>
              Manufacturing Portal & CRM
            </h1>
            <span style={{ fontSize: '12px', color: '#22c55e', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              Firebase Database & Formspree Active
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/"
            target="_blank"
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.06)',
              color: '#d4d4d8',
              borderRadius: '6px',
              fontSize: '13px',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <i className="ri-external-link-line"></i> View Live Site
          </Link>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: 'rgba(239, 68, 68, 0.15)',
              color: '#f87171',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '6px',
              fontSize: '13px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <i className="ri-logout-box-r-line"></i> Logout
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '28px 20px' }}>
        
        {/* KPI Metrics */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginBottom: '28px'
        }}>
          {/* Card 1: Total Leads */}
          <div style={{
            background: '#141418',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <span style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Total Production Leads
            </span>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#fff', marginTop: '6px' }}>
              {inquiries.length}
            </div>
            <span style={{ fontSize: '12px', color: '#c8a87a', marginTop: '4px', display: 'block' }}>
              Stored in Firestore DB
            </span>
          </div>

          {/* Card 2: New RFQs */}
          <div style={{
            background: '#141418',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <span style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              New Unaddressed
            </span>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#f59e0b', marginTop: '6px' }}>
              {inquiries.filter((i) => !i.status || i.status === 'New').length}
            </div>
            <span style={{ fontSize: '12px', color: '#a1a1aa', marginTop: '4px', display: 'block' }}>
              Requires sales follow-up
            </span>
          </div>

          {/* Card 3: Testimonials */}
          <div style={{
            background: '#141418',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <span style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Live Testimonials
            </span>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#22c55e', marginTop: '6px' }}>
              {testimonials.filter((t) => t.status === 'approved').length}
            </div>
            <span style={{ fontSize: '12px', color: '#a1a1aa', marginTop: '4px', display: 'block' }}>
              Active on Homepage
            </span>
          </div>

          {/* Card 4: Email Notifications */}
          <div style={{
            background: '#141418',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px',
          }}>
            <span style={{ fontSize: '12px', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Email Webhook
            </span>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#38bdf8', marginTop: '10px' }}>
              Formspree Connected
            </div>
            <span style={{ fontSize: '12px', color: '#71717a', marginTop: '6px', display: 'block' }}>
              mrpbbwvg (Instant Alerts)
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '12px',
          marginBottom: '24px'
        }}>
          <button
            onClick={() => setActiveTab('leads')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'leads' ? '#c8a87a' : 'transparent',
              color: activeTab === 'leads' ? '#000' : '#a1a1aa',
              transition: 'all 0.2s',
            }}
          >
            <i className="ri-inbox-archive-line"></i> Production Leads ({inquiries.length})
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              border: 'none',
              background: activeTab === 'testimonials' ? '#c8a87a' : 'transparent',
              color: activeTab === 'testimonials' ? '#000' : '#a1a1aa',
              transition: 'all 0.2s',
            }}
          >
            <i className="ri-chat-smile-2-line"></i> Testimonials Manager ({testimonials.length})
          </button>
        </div>

        {/* -------------------------------------------------- */}
        {/* TAB 1: PRODUCTION LEADS & RFQs */}
        {/* -------------------------------------------------- */}
        {activeTab === 'leads' && (
          <div>
            {/* Search & Action Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '18px'
            }}>
              <div style={{ position: 'relative', width: '320px', maxWidth: '100%' }}>
                <input
                  type="text"
                  placeholder="Search by brand, email, sole type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px 10px 38px',
                    background: '#141418',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
                <i
                  className="ri-search-line"
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#71717a' }}
                />
              </div>

              <span style={{ fontSize: '13px', color: '#a1a1aa' }}>
                Showing {filteredInquiries.length} inquiries
              </span>
            </div>

            {/* Table Container */}
            <div style={{
              background: '#141418',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                  <thead>
                    <tr style={{ background: '#19191e', borderBottom: '1px solid rgba(255,255,255,0.08)', color: '#a1a1aa' }}>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Brand / Client</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Contact Email</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Sole Formulation</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Order Batch</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600 }}>Status</th>
                      <th style={{ padding: '14px 16px', fontWeight: 600, textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#71717a' }}>
                          <i className="ri-inbox-line" style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}></i>
                          No production inquiries found yet. Submissions from the website will appear here in real time!
                        </td>
                      </tr>
                    ) : (
                      filteredInquiries.map((inquiry) => {
                        const status = inquiry.status || 'New'
                        const statusColors: any = {
                          New: { bg: 'rgba(245, 158, 11, 0.15)', text: '#f59e0b', border: '#f59e0b' },
                          Contacted: { bg: 'rgba(56, 189, 248, 0.15)', text: '#38bdf8', border: '#38bdf8' },
                          'In Discussion': { bg: 'rgba(168, 85, 247, 0.15)', text: '#c084fc', border: '#a855f7' },
                          Completed: { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ade80', border: '#22c55e' },
                        }
                        const currentC = statusColors[status] || statusColors.New

                        return (
                          <tr
                            key={inquiry.id}
                            style={{
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                              transition: 'background 0.15s'
                            }}
                          >
                            <td style={{ padding: '14px 16px', color: '#fff', fontWeight: 600 }}>
                              {inquiry.name}
                              {inquiry.createdAt && (
                                <span style={{ display: 'block', fontSize: '11px', color: '#71717a', fontWeight: 400 }}>
                                  {new Date(inquiry.createdAt).toLocaleDateString()}
                                </span>
                              )}
                            </td>
                            <td style={{ padding: '14px 16px', color: '#a1a1aa' }}>
                              <a href={`mailto:${inquiry.email}`} style={{ color: '#38bdf8', textDecoration: 'none' }}>
                                {inquiry.email}
                              </a>
                            </td>
                            <td style={{ padding: '14px 16px', color: '#d4d4d8' }}>
                              <span style={{
                                background: 'rgba(255,255,255,0.06)',
                                padding: '4px 10px',
                                borderRadius: '4px',
                                fontSize: '12px'
                              }}>
                                {inquiry.soleType}
                              </span>
                            </td>
                            <td style={{ padding: '14px 16px', color: '#a1a1aa' }}>
                              {inquiry.quantity}
                            </td>
                            <td style={{ padding: '14px 16px' }}>
                              <select
                                value={status}
                                onChange={(e) => handleUpdateStatus(inquiry.id, e.target.value)}
                                style={{
                                  background: currentC.bg,
                                  color: currentC.text,
                                  border: `1px solid ${currentC.border}`,
                                  borderRadius: '6px',
                                  padding: '4px 8px',
                                  fontSize: '12px',
                                  fontWeight: 600,
                                  outline: 'none',
                                  cursor: 'pointer'
                                }}
                              >
                                <option value="New" style={{ background: '#19191e', color: '#f59e0b' }}>New</option>
                                <option value="Contacted" style={{ background: '#19191e', color: '#38bdf8' }}>Contacted</option>
                                <option value="In Discussion" style={{ background: '#19191e', color: '#c084fc' }}>In Discussion</option>
                                <option value="Completed" style={{ background: '#19191e', color: '#4ade80' }}>Completed</option>
                              </select>
                            </td>
                            <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                              <div style={{ display: 'inline-flex', gap: '8px' }}>
                                <button
                                  onClick={() => setSelectedInquiry(inquiry)}
                                  title="View Full Specifications"
                                  style={{
                                    padding: '6px 12px',
                                    background: 'rgba(255,255,255,0.08)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <i className="ri-eye-line"></i> View
                                </button>
                                <button
                                  onClick={() => handleDeleteInquiry(inquiry.id)}
                                  title="Delete Lead"
                                  style={{
                                    padding: '6px 10px',
                                    background: 'rgba(239,68,68,0.12)',
                                    color: '#f87171',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    cursor: 'pointer'
                                  }}
                                >
                                  <i className="ri-delete-bin-line"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------- */}
        {/* TAB 2: TESTIMONIALS MANAGER */}
        {/* -------------------------------------------------- */}
        {activeTab === 'testimonials' && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '20px'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 4px', color: '#fff' }}>
                  Customer Reviews & Testimonials
                </h3>
                <p style={{ color: '#a1a1aa', fontSize: '13px', margin: 0 }}>
                  Approve, feature, or add direct client feedback. Changes reflect live on the website.
                </p>
              </div>

              <button
                onClick={() => setIsAddTestimonialOpen(true)}
                style={{
                  padding: '10px 18px',
                  background: '#c8a87a',
                  color: '#000',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <i className="ri-add-line"></i> Add Testimonial
              </button>
            </div>

            {/* Testimonials Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '18px'
            }}>
              {testimonials.length === 0 ? (
                <div style={{
                  gridColumn: '1 / -1',
                  background: '#141418',
                  padding: '40px',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#71717a'
                }}>
                  <i className="ri-chat-smile-3-line" style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}></i>
                  No custom testimonials saved yet. Default reviews are currently active on homepage. Click "Add Testimonial" to add one!
                </div>
              ) : (
                testimonials.map((item) => {
                  const isApproved = item.status === 'approved'
                  return (
                    <div
                      key={item.id}
                      style={{
                        background: '#141418',
                        border: isApproved ? '1px solid rgba(255,255,255,0.08)' : '1px dashed rgba(239, 68, 68, 0.4)',
                        borderRadius: '12px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                          <div>
                            <h4 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 2px', color: '#fff' }}>
                              {item.name}
                            </h4>
                            <span style={{ fontSize: '12px', color: '#a1a1aa' }}>
                              {item.location}
                            </span>
                          </div>

                          <span style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: isApproved ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                            color: isApproved ? '#4ade80' : '#f87171',
                            border: isApproved ? '1px solid #22c55e' : '1px solid #ef4444',
                          }}>
                            {isApproved ? 'LIVE' : 'HIDDEN'}
                          </span>
                        </div>

                        {/* Star Rating */}
                        <div style={{ display: 'flex', gap: '2px', color: '#f59e0b', fontSize: '14px', marginBottom: '12px' }}>
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <i key={i} className="ri-star-fill"></i>
                          ))}
                        </div>

                        <p style={{
                          color: '#d4d4d8',
                          fontSize: '13px',
                          lineHeight: '1.6',
                          margin: '0 0 16px',
                          fontStyle: 'italic'
                        }}>
                          "{item.text}"
                        </p>
                      </div>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderTop: '1px solid rgba(255,255,255,0.06)',
                        paddingTop: '12px'
                      }}>
                        <button
                          onClick={() => handleToggleTestimonialStatus(item.id, item.status)}
                          style={{
                            padding: '6px 12px',
                            background: isApproved ? 'rgba(239,68,68,0.15)' : 'rgba(34,197,94,0.15)',
                            color: isApproved ? '#f87171' : '#4ade80',
                            border: 'none',
                            borderRadius: '6px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            fontWeight: 600
                          }}
                        >
                          {isApproved ? 'Hide Review' : 'Approve Review'}
                        </button>

                        <button
                          onClick={() => handleDeleteTestimonial(item.id)}
                          style={{
                            padding: '6px 10px',
                            background: 'transparent',
                            color: '#71717a',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '15px'
                          }}
                          title="Delete Permanently"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>

      {/* -------------------------------------------------- */}
      {/* INQUIRY DETAIL MODAL */}
      {/* -------------------------------------------------- */}
      {selectedInquiry && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 9999
        }}>
          <div style={{
            background: '#16161b',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '30px',
            width: '100%',
            maxWidth: '600px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#fff' }}>
                Production RFQ Details
              </h3>
              <button
                onClick={() => setSelectedInquiry(null)}
                style={{ background: 'transparent', border: 'none', color: '#a1a1aa', fontSize: '22px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>Client / Brand</span>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff' }}>{selectedInquiry.name}</div>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>Email</span>
                <div>
                  <a href={`mailto:${selectedInquiry.email}`} style={{ color: '#38bdf8', fontSize: '14px', textDecoration: 'none' }}>
                    {selectedInquiry.email}
                  </a>
                </div>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>Sole Formulation</span>
                <div style={{ fontSize: '14px', color: '#c8a87a', fontWeight: 600 }}>{selectedInquiry.soleType}</div>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>Order Quantity</span>
                <div style={{ fontSize: '14px', color: '#fff' }}>{selectedInquiry.quantity}</div>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>Subject</span>
              <div style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{selectedInquiry.subject}</div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>Production Specifications</span>
              <div style={{
                background: '#0d0d10',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '14px',
                fontSize: '13px',
                lineHeight: '1.6',
                color: '#d4d4d8',
                marginTop: '6px',
                whiteSpace: 'pre-wrap'
              }}>
                {selectedInquiry.message}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <a
                href={`mailto:${selectedInquiry.email}?subject=Re: ${encodeURIComponent(selectedInquiry.subject)} - MP Sole® Manufacturing`}
                style={{
                  padding: '10px 18px',
                  background: '#c8a87a',
                  color: '#000',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '13px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <i className="ri-reply-line"></i> Email Client Directly
              </a>

              <button
                onClick={() => setSelectedInquiry(null)}
                style={{
                  padding: '10px 18px',
                  background: 'rgba(255,255,255,0.08)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------- */}
      {/* ADD TESTIMONIAL MODAL */}
      {/* -------------------------------------------------- */}
      {isAddTestimonialOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          zIndex: 9999
        }}>
          <div style={{
            background: '#16161b',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '16px',
            padding: '30px',
            width: '100%',
            maxWidth: '520px',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.9)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#fff' }}>
                Add New Client Testimonial
              </h3>
              <button
                onClick={() => setIsAddTestimonialOpen(false)}
                style={{ background: 'transparent', border: 'none', color: '#a1a1aa', fontSize: '22px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleAddTestimonial}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#a1a1aa', marginBottom: '6px' }}>Client Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Asif Raza"
                  value={newTestimonial.name}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#0e0e11',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#a1a1aa', marginBottom: '6px' }}>City / Country</label>
                <input
                  type="text"
                  placeholder="e.g. Lahore, Pakistan"
                  value={newTestimonial.location}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, location: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#0e0e11',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#a1a1aa', marginBottom: '6px' }}>Star Rating</label>
                <select
                  value={newTestimonial.rating}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, rating: Number(e.target.value) })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#0e0e11',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                >
                  <option value={5}>5 Stars - Outstanding</option>
                  <option value={4}>4 Stars - Great Quality</option>
                  <option value={3}>3 Stars - Good</option>
                </select>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label style={{ display: 'block', fontSize: '12px', color: '#a1a1aa', marginBottom: '6px' }}>Review Text</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write the client's manufacturing review or feedback..."
                  value={newTestimonial.text}
                  onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    background: '#0e0e11',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setIsAddTestimonialOpen(false)}
                  style={{
                    padding: '10px 16px',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '10px 18px',
                    background: '#c8a87a',
                    color: '#000',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Save & Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
