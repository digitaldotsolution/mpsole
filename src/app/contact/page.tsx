import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact MP Sole® | Request Shoe Sole Production Quote Pakistan',
  description: 'Contact MP Sole® for wholesale footwear sole manufacturing, custom mold tooling, and bulk production orders in Karachi, Pakistan. Request an immediate factory quote.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/contact',
  },
}

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://mpsolemanufacture.com/contact#webpage",
      "url": "https://mpsolemanufacture.com/contact",
      "name": "Contact MP Sole® | Request Shoe Sole Production Quote Pakistan",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      },
      "about": {
        "@id": "https://mpsolemanufacture.com/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/contact#breadcrumb",
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
          "name": "B2B Quote",
          "item": "https://mpsolemanufacture.com/contact"
        }
      ]
    }
  ]
};

export default function ContactPage() {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Contact />
    </Wrapper>
  )
}
