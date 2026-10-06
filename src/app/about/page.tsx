import React from 'react'
import type { Metadata } from 'next'
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'

export const metadata: Metadata = {
  title: 'About MP Sole® | Shoe Sole Manufacturer in Pakistan Since 1990',
  description: 'Established in 1990, MP Sole® is a shoe sole manufacturer in Pakistan specializing in footwear sole manufacturing, polymer compounding, custom mold tooling, and automated injection molding.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/about',
  },
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://mpsolemanufacture.com/about#webpage",
      "url": "https://mpsolemanufacture.com/about",
      "name": "About MP Sole® | Shoe Sole Manufacturer in Pakistan Since 1990",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      },
      "about": {
        "@id": "https://mpsolemanufacture.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/about#breadcrumb",
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
          "name": "About",
          "item": "https://mpsolemanufacture.com/about"
        }
      ]
    }
  ]
}

export default function AboutPage() {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <About />
    </Wrapper>
  )
}
