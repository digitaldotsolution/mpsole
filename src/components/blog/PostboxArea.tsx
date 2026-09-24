"use client" 
import React from 'react'
import Link from 'next/link'

export default function PostboxArea({setIsVideoOpen}: any) {
  return (
    <>
      <section className="blog-page-area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="postbox__wrapper">
                
                {/* Single Featured Blog Post */}
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__content">
                    <div className="postbox__meta">
                      <span>
                        <a href="#"><i className="fa-light fa-user"></i>MP Sole® Editorial</a>
                      </span>
                      <span>
                        <a href="#"><i className="fa-light fa-clock"></i>September 2026</a>
                      </span>
                      <span>
                        <a href="#"><i className="fa-sharp fa-thin fa-tags"></i>Sole Manufacturing</a>
                      </span>
                    </div>

                    <h3 className="postbox__title">
                      <Link href="/blog-details">
                        Best Quality Shoe Sole Manufacturing in Karachi, Pakistan
                      </Link>
                    </h3>

                    <div className="postbox__text">
                      <p>
                        Discover best quality shoe sole manufacturing in Karachi, Pakistan. Skilled workers, strong materials & trusted quality for all shoe types.
                      </p>
                      <p>
                        Karachi is one of the biggest cities in Pakistan. It is also a busy place for making shoes. Many small and big factories work here every day. They make different parts of shoes. One important part is the sole. The sole is the bottom part of a shoe. It touches the ground when you walk. If you are looking for shoes sole manufacture in Karachi, you are in the right place. This city has skilled workers, good machines, and years of experience in shoe making...
                      </p>
                    </div>

                    <div className="postbox__read-more">
                      <Link href="/blog-details" className="theme-btn">
                        Read Full Article <i className="ri-arrow-right-line ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </article>

              </div>
            </div>

            <div className="col-xxl-4 col-lg-4">
              <div className="blog_sidebar__wrapper pl-40">
                
                {/* Search Widget */}
                <div className="sidebar__widget mb-20">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#" onSubmit={(e) => e.preventDefault()}>
                        <div className="sidebar__search-input">
                          <input type="text" placeholder="Search sole types, materials..." />
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

                {/* Recent Posts Widget */}
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Featured Article</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post">
                        <div className="rc__post-content">
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">Best Quality Shoe Sole Manufacturing in Karachi, Pakistan</Link>
                          </h3>
                          <div className="rc__meta">
                            <span>
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 14C11.0899 14 14 11.0899 14 7.5C14 3.91015 11.0899 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0899 3.91015 14 7.5 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.5 3.59961V7.49961L10.1 8.79961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg> September 2026
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="sidebar__widget mb-45">
                  <h3 className="sidebar__widget-title">Industry Categories</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li><Link href="/sole-types">Sole Manufacturing <span>01</span></Link></li>
                      <li><Link href="/sole-types">Rubber & EVA Compounding <span>02</span></Link></li>
                      <li><Link href="/sole-types">PU & Phylon Soles <span>03</span></Link></li>
                      <li><Link href="/sole-types">Custom Mold Tooling <span>04</span></Link></li>
                    </ul>
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="sidebar__widget mb-40">
                  <h3 className="sidebar__widget-title">Tags</h3>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <a href="#">Shoe Soles</a>
                      <a href="#">Karachi</a>
                      <a href="#">Pakistan</a>
                      <a href="#">Rubber</a>
                      <a href="#">PU Sole</a>
                      <a href="#">Footwear</a>
                      <a href="#">Tooling</a>
                    </div>
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
