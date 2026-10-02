import React from 'react'
import BlogDetailsArea from './BlogDetailsArea'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'

export default function BlogDetails({ slug }: { slug?: string } = {}) {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BlogDetailsArea slug={slug} />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
