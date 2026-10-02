import Projects from '@/components/projects' 
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Footwear Sole Projects & Tooling Portfolio | MP Sole®',
  description: 'Explore high-precision footwear outsoles, PU injection molds, and custom compounding projects engineered by MP Sole®.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/projects',
  },
}


export default function index() {
  return (
    <Wrapper>
      <Projects />
    </Wrapper>
  )
}
