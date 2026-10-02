"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePublishedBlogs, BlogPost } from '@/lib/blogs'

const POSTS_PER_PAGE = 10;

export default function PostboxArea({ setIsVideoOpen }: any) {
  const { posts: allPosts, status } = usePublishedBlogs()
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Categories list extracted dynamically
  const categories = ["All", ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))]

  // Filter posts
  const filteredPosts = allPosts.filter(post => {
    const matchesCat = activeCategory === "All" || post.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      (post.tags && post.tags.some(t => t.toLowerCase().includes(query)));
    return matchesCat && matchesSearch;
  });

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <section className="blog-page-area py-60">
        <style dangerouslySetInnerHTML={{ __html: `
          .mp-blog-card {
            background-color: #111116;
            border: 1px solid rgba(200, 168, 122, 0.22);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45);
            transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
          }
          .mp-blog-card:hover {
            transform: translateY(-4px);
            border-color: #c8a87a !important;
            box-shadow: 0 14px 30px -8px rgba(0, 0, 0, 0.8), 0 0 22px -2px rgba(200, 168, 122, 0.3) !important;
          }
          .mp-blog-card:hover .mp-blog-title {
            color: #c8a87a !important;
          }
          .mp-btn-outline {
            border: 1px solid #c8a87a !important;
            color: #c8a87a !important;
            background: rgba(200, 168, 122, 0.08);
            font-weight: 600;
            transition: all 0.25s ease;
          }
          .mp-btn-outline:hover {
            background: #c8a87a !important;
            color: #0c0c0e !important;
            box-shadow: 0 4px 15px rgba(200, 168, 122, 0.35);
          }
        `}} />
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              {/* Category Filter Pills */}
              <div className="d-flex align-items-center gap-2 flex-wrap mb-40">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
                    className="btn btn-sm rounded-pill px-3 py-1.5 fw-bold transition-all"
                    style={{
                      fontSize: '13px',
                      backgroundColor: activeCategory === cat ? '#c8a87a' : 'transparent',
                      borderColor: activeCategory === cat ? '#c8a87a' : 'rgba(255,255,255,0.2)',
                      color: activeCategory === cat ? '#0c0c0e' : '#ffffff',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {status === "loading" && (
                <div className="text-center py-5">
                  <div className="spinner-border" role="status" style={{ color: '#c8a87a' }} />
                  <p className="mt-3 text-white">Loading MP Sole® insights...</p>
                </div>
              )}

              {filteredPosts.length === 0 && status === "ready" && (
                <div className="text-center py-5 border border-secondary border-opacity-25 rounded-4 p-4" style={{ backgroundColor: '#111116' }}>
                  <h4 className="text-white">No articles found</h4>
                  <p className="text-muted">Try clearing your search or selecting another category.</p>
                  <button 
                    type="button" 
                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                    className="btn btn-sm rounded-pill mt-2 mp-btn-outline px-4 py-2"
                  >
                    Reset Filters
                  </button>
                </div>
              )}

              <div className="row g-4">
                {currentPosts.map((post) => (
                  <div key={post.slug} className="col-md-6 col-12 d-flex">
                    <article 
                      className="mp-blog-card d-flex flex-column w-100 rounded-4 transition-3 h-100 p-4 position-relative"
                      style={{
                        backgroundColor: '#111116',
                        border: '1px solid rgba(200, 168, 122, 0.22)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.45)',
                        transition: 'all 0.28s ease',
                      }}
                    >
                      {/* Top Header: Category & Meta */}
                      <div className="d-flex align-items-center justify-content-between gap-2 mb-3 flex-wrap">
                        <span 
                          className="badge rounded-pill fw-semibold px-3 py-1.5"
                          style={{ 
                            backgroundColor: 'rgba(200, 168, 122, 0.16)', 
                            border: '1px solid rgba(200, 168, 122, 0.45)',
                            color: '#dfbe8e',
                            fontSize: '11.5px',
                            letterSpacing: '0.4px'
                          }}
                        >
                          {post.category || "Footwear Industry"}
                        </span>
                        
                        <div className="d-flex align-items-center gap-3" style={{ fontSize: '12px', color: '#f1f5f9' }}>
                          <span className="d-inline-flex align-items-center">
                            <i className="fa-light fa-calendar" style={{ color: '#c8a87a', marginRight: '6px' }}></i>
                            <span style={{ color: '#ffffff' }}>{post.publishedDate}</span>
                          </span>
                          <span style={{ color: '#64748b' }}>•</span>
                          <span className="d-inline-flex align-items-center">
                            <i className="fa-light fa-clock" style={{ color: '#c8a87a', marginRight: '6px' }}></i>
                            <span style={{ color: '#ffffff' }}>{post.readTime}</span>
                          </span>
                        </div>
                      </div>

                      {/* Blog Title */}
                      <h3 className="mb-2" style={{ fontSize: '19px', fontWeight: 700, lineHeight: 1.4 }}>
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="text-white text-decoration-none mp-blog-title"
                          style={{ transition: 'color 0.2s ease', color: '#ffffff' }}
                        >
                          {post.title}
                        </Link>
                      </h3>

                      {/* Excerpt (Crisp High-Contrast White Text) */}
                      <p 
                        className="mb-4 flex-grow-1" 
                        style={{ 
                          fontSize: '14px', 
                          lineHeight: '1.65', 
                          color: '#e2e8f0',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {post.excerpt || "Explore specialized industrial footwear manufacturing insights, polymer compounding processes, and quality standards."}
                      </p>

                      {/* Card Footer (Author & Read Button) */}
                      <div 
                        className="pt-3 d-flex align-items-center justify-content-between mt-auto"
                        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
                      >
                        <div className="d-flex align-items-center gap-2 fw-medium" style={{ fontSize: '13px' }}>
                          <i className="fa-light fa-user-pen" style={{ color: '#c8a87a', fontSize: '15px', marginRight: '3px' }}></i>
                          <span style={{ color: '#cbd5e1' }}>By</span>
                          <strong style={{ color: '#ffffff', marginLeft: '2px' }}>{post.author || "MP Sole® Editorial"}</strong>
                        </div>
                        <Link 
                          href={`/blog/${post.slug}`} 
                          className="btn btn-sm rounded-pill px-3 py-1.5 fw-bold d-inline-flex align-items-center gap-1 mp-btn-outline"
                          style={{ fontSize: '12px' }}
                        >
                          Read Article <i className="ri-arrow-right-line ms-1"></i>
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>

              {/* Numbered Pagination (1, 2, 3, 4...) */}
              {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center gap-2 mt-45 flex-wrap">
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentPage(prev => Math.max(prev - 1, 1));
                      if (typeof window !== 'undefined') window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    disabled={currentPage === 1}
                    className="btn btn-sm rounded-pill px-3 py-1.5 fw-bold"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: currentPage === 1 ? 'rgba(255, 255, 255, 0.25)' : '#ffffff',
                      backgroundColor: 'transparent',
                      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                      fontSize: '12.5px'
                    }}
                  >
                    ← Prev
                  </button>

                  {/* Page Number Buttons: 1, 2, 3, 4... */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      type="button"
                      onClick={() => {
                        setCurrentPage(pageNum);
                        if (typeof window !== 'undefined') window.scrollTo({ top: 300, behavior: 'smooth' });
                      }}
                      className="btn btn-sm rounded-circle fw-bold d-flex align-items-center justify-content-center"
                      style={{
                        width: '38px',
                        height: '38px',
                        backgroundColor: currentPage === pageNum ? '#c8a87a' : 'transparent',
                        border: currentPage === pageNum ? '1px solid #c8a87a' : '1px solid rgba(255, 255, 255, 0.16)',
                        color: currentPage === pageNum ? '#0c0c0e' : '#ffffff',
                        fontSize: '13.5px',
                        fontWeight: currentPage === pageNum ? 700 : 500,
                        transition: 'all 0.2s ease',
                        boxShadow: currentPage === pageNum ? '0 4px 15px rgba(200, 168, 122, 0.4)' : 'none',
                      }}
                    >
                      {pageNum}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentPage(prev => Math.min(prev + 1, totalPages));
                      if (typeof window !== 'undefined') window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    disabled={currentPage === totalPages}
                    className="btn btn-sm rounded-pill px-3 py-1.5 fw-bold"
                    style={{
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      color: currentPage === totalPages ? 'rgba(255, 255, 255, 0.25)' : '#ffffff',
                      backgroundColor: 'transparent',
                      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                      fontSize: '12.5px'
                    }}
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-xxl-4 col-lg-4">
              <div className="blog_sidebar__wrapper pl-40">
                
                {/* Search Widget */}
                <div className="sidebar__widget mb-30">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <div className="sidebar__search-input">
                          <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                            placeholder="Search sole types, materials..." 
                          />
                          <button type="submit">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M19.0002 19.0002L17.2002 17.2002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Author Info Widget */}
                <div className="sidebar__widget mb-45">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__author">
                      <div className="sidebar__author-content pt-15">
                        <h3 className="sidebar__author-title">MP Sole® Manufacturing</h3>
                        <p>Industry-leading contract manufacturer and compounder of high-performance footwear outsoles and tooling based in Karachi, Pakistan since 1990.</p>
                        <div className="sidebar__author-social d-flex align-items-center justify-content-center">
                          <a href="https://wa.me/923152653086" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fa-brands fa-whatsapp"></i></a>
                          <a href="https://www.facebook.com/mpsolemaufacture" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fa-brands fa-facebook"></i></a>
                          <a href="https://www.instagram.com/mpsolemanufacture/" target="_blank" rel="noopener noreferrer" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
                          <a href="/contact" title="Contact Us"><i className="fa-regular fa-envelope"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent / Featured Posts from Firestore */}
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Recent Articles</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      {allPosts.slice(0, 4).map((post) => (
                        <div key={post.slug} className="rc__post mb-3">
                          <div className="rc__post-content">
                            <h3 className="rc__post-title mb-1" style={{ fontSize: '15px' }}>
                              <Link href={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>
                            <div className="rc__meta text-muted small">
                              <span><i className="fa-light fa-calendar me-1" style={{ color: '#c8a87a' }}></i>{post.publishedDate}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Industry Categories */}
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Sole Manufacturing Solutions</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li><Link href="/sole-types/pu-sole-gents">Polyurethane (PU) Soles</Link></li>
                      <li><Link href="/sole-types/tr-sole">Rubber &amp; EVA Compounding</Link></li>
                      <li><Link href="/sole-types/medicated-sole">Orthopedic &amp; Medicated Soles</Link></li>
                      <li><Link href="/contact">Custom CAD/CAM Tooling</Link></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
