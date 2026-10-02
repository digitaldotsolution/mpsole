import React from 'react'
import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'

type Props = {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const cleanTitle = (params.slug || '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    title: `${cleanTitle} | MP Sole®`,
    description: `Read ${cleanTitle} on MP Sole - leading footwear sole and component manufacturer in Karachi, Pakistan.`,
    alternates: {
      canonical: `https://mpsolemanufacture.com/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  return (
    <Wrapper>
      <React.Suspense fallback={<div className="text-center py-5"><div className="spinner-border text-success" /></div>}>
        <BlogDetails slug={params.slug} />
      </React.Suspense>
    </Wrapper>
  )
}
