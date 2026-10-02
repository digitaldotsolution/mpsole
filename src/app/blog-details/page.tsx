

import React from 'react'
import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'

export const metadata: Metadata = {
  title: 'Blog Details | MP Sole®',
  description: 'Footwear components and shoe sole manufacturing articles from MP Sole.',
}

export default function BlogDetailsPage() {
  return (
    <Wrapper>
      <React.Suspense fallback={<div className="text-center py-5"><div className="spinner-border text-success" /></div>}>
        <BlogDetails />
      </React.Suspense>
    </Wrapper>
  )
}
