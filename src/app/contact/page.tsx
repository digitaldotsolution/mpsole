 
import Contact from '@/components/contact'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact MP Sole® Manufacture | Request Sole Production Quote Pakistan',
  description: 'Contact MP Sole® for wholesale footwear sole manufacturing, custom mold tooling, and bulk production orders in Karachi, Pakistan. Request an immediate factory quote.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/contact',
  },
}


export default function index() {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  )
}
