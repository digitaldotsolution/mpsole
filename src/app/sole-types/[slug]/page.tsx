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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const sole = SOLE_TYPES_DATA.find((s) => s.slug === params.slug);
  if (!sole) {
    return {
      title: 'Sole Not Found - YOUR SOLE™',
    };
  }

  return {
    title: `${sole.title} | YOUR SOLE™ Footwear Manufacturing`,
    description: sole.desc,
  };
}

export default function SoleTypePage({ params }: PageProps) {
  const sole = SOLE_TYPES_DATA.find((s) => s.slug === params.slug);

  if (!sole) {
    notFound();
  }

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb
              title={sole.shortTitle}
              subtitle={`${sole.category} • ${sole.specs}`}
            />
            <SingleProjectArea sole={sole} />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
