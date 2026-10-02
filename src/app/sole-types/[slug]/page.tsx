import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Wrapper from '@/layouts/Wrapper'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'
import Breadcrumb from '@/components/common/Breadcrumb'
import SingleProjectArea from '@/components/single-project/SingleProjectArea'
import { SOLE_TYPES_DATA } from '@/data/sole_data'

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SOLE_TYPES_DATA.map((sole) => ({
    slug: sole.slug,
  }));
}

const SEO_H1_MAP: Record<string, string> = {
  'pu-sole-gents': 'P.U Gents Shoe Sole Manufacturer in Pakistan',
  'pio-sole-gents': 'P.U Gents Shoe Sole Manufacturer in Pakistan',
  'ladies-jelly-sole': 'Ladies Jelly Sole Manufacturer in Pakistan',
  'tr-sole': 'TR Shoe Sole Manufacturer in Pakistan',
  'medicated-sole': 'Medicated Shoe Sole Manufacturer in Pakistan',
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sole = SOLE_TYPES_DATA.find((s) => s.slug === params.slug);
  if (!sole) {
    return {
      title: 'Sole Not Found - MP Sole®',
    };
  }

  const h1Title = SEO_H1_MAP[sole.slug] || sole.title;

  return {
    title: `${h1Title} | MP Sole®`,
    description: sole.desc,
    alternates: {
      canonical: `https://mpsolemanufacture.com/sole-types/${sole.slug}`,
    },
  };
}

export default function SoleTypePage({ params }: PageProps) {
  const sole = SOLE_TYPES_DATA.find((s) => s.slug === params.slug);

  if (!sole) {
    notFound();
  }

  const pageH1 = SEO_H1_MAP[sole.slug] || sole.shortTitle;

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title={pageH1}
              subtitle={`${sole.category} • ${sole.specs}`}
              tag="h1"
            />
            <SingleProjectArea sole={sole} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
