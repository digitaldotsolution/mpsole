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
  const cleanTitle = (params.slug || '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
  const canonicalUrl = `https://mpsolemanufacture.com/blog/${params.slug}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        "url": canonicalUrl,
        "headline": cleanTitle,
        "description": `Read ${cleanTitle} on MP Sole - leading footwear sole and component manufacturer in Karachi, Pakistan.`,
        "datePublished": "2026-09-15T00:00:00.000Z",
        "dateModified": "2026-10-02T00:00:00.000Z",
        "author": {
          "@type": "Organization",
          "name": "MP Sole® Editorial"
        },
        "publisher": {
          "@id": "https://mpsolemanufacture.com/#organization"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mpsolemanufacture.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://mpsolemanufacture.com/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": cleanTitle,
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <React.Suspense fallback={<div className="text-center py-5"><div className="spinner-border text-success" /></div>}>
        <BlogDetails slug={params.slug} />
      </React.Suspense>
    </Wrapper>
  )
}
