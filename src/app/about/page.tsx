
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About MP Sole® Manufacture | Shoe Sole Factory Pakistan Since 1990',
  description: 'Discover MP Sole®: Pakistan premier footwear shoe sole manufacturer and compounder since 1990. Trusted for high-precision PU, TR, jelly, and orthopedic soles in Karachi and nationwide.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/about',
  },
}


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
