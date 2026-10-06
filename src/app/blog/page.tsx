import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Shoe Sole Manufacturing Blog | MP Sole® Footwear Industry Insights Pakistan',
  description: 'Explore footwear industry insights, polymer compounding advancements, sole manufacturing guides, and factory updates from MP Sole® in Karachi, Pakistan.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/blog',
  },
}

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Blog", "CollectionPage"],
      "@id": "https://mpsolemanufacture.com/blog#webpage",
      "url": "https://mpsolemanufacture.com/blog",
      "name": "Shoe Sole Manufacturing Blog | MP Sole®",
      "description": "Explore footwear industry insights, polymer compounding advancements, sole manufacturing guides, and factory updates from MP Sole® in Karachi, Pakistan.",
      "publisher": {
        "@id": "https://mpsolemanufacture.com/#organization"
      },
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/blog#breadcrumb",
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
        }
      ]
    }
  ]
};

export default function BlogIndexPage() {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }}
      />
      <Blog />
    </Wrapper>
  )
}
