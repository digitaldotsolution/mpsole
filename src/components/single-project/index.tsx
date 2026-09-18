'use client';
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import SingleProjectArea from './SingleProjectArea'
import FooterOne from '@/layouts/footers/FooterOne'
import { SOLE_TYPES_DATA } from '@/data/sole_data'

function SingleProjectContent() {
  const searchParams = useSearchParams();
  const idParam = searchParams.get('id');
  const soleId = idParam ? parseInt(idParam, 10) : 1;
  const sole = SOLE_TYPES_DATA.find((s) => s.id === soleId) || SOLE_TYPES_DATA[0];

  return (
    <>
      <Breadcrumb
        title={sole.shortTitle}
        subtitle={`${sole.category} • ${sole.specs}`}
      />
      <SingleProjectArea sole={sole} />
    </>
  );
}

export default function SingleProject() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Suspense fallback={<div className="text-center py-5">Loading Sole Specifications...</div>}>
              <SingleProjectContent />
            </Suspense>
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
