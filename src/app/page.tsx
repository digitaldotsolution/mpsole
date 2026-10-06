import React from 'react'
import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'

export const metadata: Metadata = {
  title: 'MP Sole® | Shoe Sole Manufacturer in Pakistan | PU & TR Soles',
  description: 'MP Sole® is Pakistan premier footwear shoe sole manufacturer since 1990. We specialize in high-precision PU, TR, Ladies Jelly, and Medicated soles for brands in Pakistan and worldwide.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/',
  },
}

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mpsolemanufacture.com/#organization",
      "name": "MP Sole®",
      "url": "https://mpsolemanufacture.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mpsolemanufacture.com/assets/images/logos/mp-sole-black.png"
      },
      "foundingDate": "1990",
      "telephone": "+923152653086",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No MIIIE-A-30-A-1, St#01 Muhammadi Rd, BLOCK-B, Shershah Colony",
        "addressLocality": "Karachi",
        "addressCountry": "PK"
      },
      "sameAs": [
        "https://www.instagram.com/mpsolemanufacture/",
        "https://www.facebook.com/p/MP-Sole-manufacture-61594053068516/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://mpsolemanufacture.com/#website",
      "url": "https://mpsolemanufacture.com/",
      "name": "MP Sole®",
      "publisher": {
        "@id": "https://mpsolemanufacture.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://mpsolemanufacture.com/#webpage",
      "url": "https://mpsolemanufacture.com/",
      "name": "MP Sole® | Shoe Sole Manufacturer in Pakistan | PU & TR Soles",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      },
      "about": {
        "@id": "https://mpsolemanufacture.com/#organization"
      }
    }
  ]
}

export default function IndexPage() {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <Home /> 
    </Wrapper>
  )
}
