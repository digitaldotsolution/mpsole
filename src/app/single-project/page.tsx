 
import SingleProject from '@/components/single-project'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Footwear Sole Project Case Study | MP Sole® Tooling',
  description: 'Detailed engineering case study and manufacturing specifications for custom footwear soles by MP Sole®.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/single-project',
  },
}


export default function index() {
  return (
    <Wrapper>
      <SingleProject />
    </Wrapper>
  )
}
