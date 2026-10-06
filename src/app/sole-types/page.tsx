import React from 'react';
import type { Metadata } from 'next';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import SoleTypesOverview from '@/components/sole-types/SoleTypesOverview';

export const metadata: Metadata = {
  title: 'Shoe Sole Types & Manufacturing in Pakistan | MP Sole®',
  description: 'Explore P.U Gents, Ladies Jelly, TR and Medicated shoe soles manufactured by MP Sole® in Karachi, Pakistan for footwear brands, manufacturers and wholesale buyers.',
  keywords: [
    'Shoe Sole Manufacturer in Pakistan',
    'shoe sole types',
    'shoe sole manufacturing Pakistan',
    'footwear sole manufacturer',
    'PU sole manufacturer',
    'TR sole manufacturer',
    'Ladies Jelly sole manufacturer',
    'Medicated sole manufacturer',
    'shoe sole factory Karachi',
    'wholesale shoe soles',
    'custom shoe sole manufacturing',
  ],
  alternates: {
    canonical: 'https://mpsolemanufacture.com/sole-types',
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://mpsolemanufacture.com/sole-types#webpage",
      "url": "https://mpsolemanufacture.com/sole-types",
      "name": "Shoe Sole Types & Manufacturing in Pakistan | MP Sole®",
      "description": "Explore P.U Gents, Ladies Jelly, TR and Medicated shoe soles manufactured by MP Sole® in Karachi, Pakistan for footwear brands, manufacturers and wholesale buyers.",
      "isPartOf": {
        "@id": "https://mpsolemanufacture.com/#website"
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "P.U Gents Sole",
            "url": "https://mpsolemanufacture.com/sole-types/pu-sole-gents"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ladies Jelly Sole",
            "url": "https://mpsolemanufacture.com/sole-types/ladies-jelly-sole"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "TR Sole",
            "url": "https://mpsolemanufacture.com/sole-types/tr-sole"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Medicated Sole",
            "url": "https://mpsolemanufacture.com/sole-types/medicated-sole"
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mpsolemanufacture.com/sole-types#breadcrumb",
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
          "name": "Sole Types",
          "item": "https://mpsolemanufacture.com/sole-types"
        }
      ]
    }
  ]
};

export default function SoleTypesPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <SoleTypesOverview />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
