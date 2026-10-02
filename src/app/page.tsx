 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: 'MP Sole® - Leading Shoe Sole Manufacturer in Pakistan | Tooling & Production',
  description: 'MP Sole® is Pakistan premier footwear shoe sole manufacturer since 1990. We specialize in high-precision PU, TR, Ladies Jelly, and Medicated soles for brands in Pakistan and worldwide.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/',
  },
}


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
