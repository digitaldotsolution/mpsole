"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import Breadcrumb from '../common/Breadcrumb'
import { usePublishedBlogs, BlogPost, STATIC_FALLBACK_BLOGS } from '@/lib/blogs'

export default function BlogDetailsArea({ slug: propSlug }: { slug?: string } = {}) {
  const params = useParams()
  const searchParams = useSearchParams()
  const { posts, status } = usePublishedBlogs()
  const [copied, setCopied] = useState(false)

  // Extract slug from prop, route params (/blog/[slug]), or searchParams (?slug=...)
  const routeSlug = (params?.slug as string | undefined) || undefined;
  const querySlug = (searchParams ? searchParams.get('slug') : null) || undefined;
  const activeSlug = propSlug || routeSlug || querySlug;

  // Find exact post matching the slug from live Firestore posts or static fallbacks
  const matchedPost = activeSlug 
    ? (posts.find(p => p.slug === activeSlug) || STATIC_FALLBACK_BLOGS.find(p => p.slug === activeSlug))
    : null;

  // While Firestore is loading and post not yet found in cache, wait
  const isWaitingForPosts = status === "loading" && !matchedPost;

  // Resolved post: matched post, or first post once loaded
  const currentPost: BlogPost | null = matchedPost || (status !== "loading" ? (posts[0] || STATIC_FALLBACK_BLOGS[0]) : null);

  useEffect(() => {
    if (currentPost?.title && typeof document !== 'undefined') {
      document.title = `${currentPost.title} | MP Sole®`;
    }
  }, [currentPost]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (isWaitingForPosts || !currentPost) {
    return (
      <div className="container py-5 my-5 text-center" style={{ minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="spinner-border" role="status" style={{ width: "2.5rem", height: "2.5rem", color: "#c8a87a" }} />
        <p className="mt-3 text-white small fw-bold">Loading article…</p>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb 
        title={currentPost.title || "Blog Details"} 
        tag="div"
        titleStyle={{ fontSize: "clamp(24px, 3.2vw, 38px)", fontWeight: 700 }}
      />
      <section className="postbox__area grey-bg-4 pt-50 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10 col-xl-10 col-lg-12">
              <div className="postbox__main-wrapper">
                
                {/* Back Link */}
                <div className="mb-25">
                  <Link href="/blog" className="text-decoration-none small fw-bold d-inline-flex align-items-center gap-1" style={{ color: '#c8a87a' }}>
                    ← Back to All Articles
                  </Link>
                </div>

                {/* Meta Header */}
                <div className="postbox__meta mb-20 d-flex align-items-center gap-3 flex-wrap text-white">
                  <span style={{ color: '#ffffff' }}>
                    <i className="fa-light fa-user me-1" style={{ color: '#c8a87a' }}></i>{currentPost.author}
                  </span>
                  <span style={{ color: '#ffffff' }}>
                    <i className="fa-light fa-calendar me-1" style={{ color: '#c8a87a' }}></i>{currentPost.publishedDate}
                  </span>
                  <span style={{ color: '#ffffff' }}>
                    <i className="fa-light fa-clock me-1" style={{ color: '#c8a87a' }}></i>{currentPost.readTime}
                  </span>
                  <span 
                    className="badge rounded-pill fw-semibold px-3 py-1.5"
                    style={{ 
                      backgroundColor: 'rgba(200, 168, 122, 0.16)', 
                      border: '1px solid rgba(200, 168, 122, 0.45)',
                      color: '#dfbe8e',
                      fontSize: '12px'
                    }}
                  >
                    {currentPost.category}
                  </span>
                </div>

                <div className="postbox__details-content-wrapper">
                  <h1 className="postbox__details-title mb-25 text-white" style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.25", color: "#ffffff" }}>
                    {currentPost.title}
                  </h1>

                  {/* Meta Description Box (if present) */}
                  {(currentPost.seo?.metaDescription || currentPost.excerpt) && (
                    <div className="alert mb-35" style={{ background: "#111116", border: "1px solid rgba(200, 168, 122, 0.35)", borderLeft: "4px solid #c8a87a", color: "#f8fafc", padding: "16px 20px", borderRadius: "10px" }}>
                      <p style={{ margin: 0, fontSize: "15px", fontStyle: "italic", color: "#ffffff" }}>
                        <strong style={{ color: "#c8a87a" }}>Overview:</strong> &ldquo;{currentPost.seo?.metaDescription || currentPost.excerpt}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Featured Image (Only if present and not placeholder) */}
                  {currentPost.featuredImage?.url && !currentPost.featuredImage.url.includes("1400") && !currentPost.featuredImage.url.includes("blog1.jpg") && (
                    <div className="postbox__thumb mb-35 overflow-hidden rounded-4 border border-secondary border-opacity-25 shadow-sm" style={{ maxHeight: '440px', backgroundColor: '#0c0c0e' }}>
                      <img 
                        src={currentPost.featuredImage.url} 
                        alt={currentPost.featuredImage.alt || currentPost.title} 
                        className="w-100 object-fit-cover d-block"
                        style={{ maxHeight: '440px', objectPosition: 'center' }}
                      />
                    </div>
                  )}

                  {/* Dynamic Article HTML Body */}
                  <div 
                    className="article-content"
                    style={{ fontSize: "17px", lineHeight: "1.8", color: "#f1f5f9" }}
                    dangerouslySetInnerHTML={{ __html: currentPost.contentHtml }}
                  />

                  {/* Article Tags & Share */}
                  <div className="border-top pt-30 mt-40 d-flex align-items-center justify-content-between flex-wrap gap-3" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <span className="fw-bold small text-white">Tags:</span>
                      {(currentPost.tags && currentPost.tags.length > 0 ? currentPost.tags : ["Shoe Sole", "Karachi", "Footwear"]).map((t) => (
                        <span key={t} className="badge rounded-pill" style={{ backgroundColor: 'rgba(200, 168, 122, 0.12)', border: '1px solid rgba(200, 168, 122, 0.35)', color: '#dfbe8e' }}>
                          #{t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="btn btn-sm rounded-pill px-3 py-1.5 fw-bold"
                      style={{ border: '1px solid #c8a87a', color: '#c8a87a', background: 'rgba(200, 168, 122, 0.08)' }}
                    >
                      {copied ? "✓ Link Copied!" : "Share Article"}
                    </button>
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
