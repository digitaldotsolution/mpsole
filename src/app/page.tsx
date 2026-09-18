 
import React from 'react'

import type { Metadata } from 'next'  
import Home from '@/components/home'
import Wrapper from '@/layouts/Wrapper'
export const metadata: Metadata = {
  title: 'MP Sole® - High-Precision Footwear Sole Manufacturer & Tooling',
  description: 'MP Sole® is an industry-leading contract manufacturer and compounder of high-performance footwear outsoles, carbon-fiber plates, and ergonomic midsoles for athletic and luxury brands worldwide.',
}


export default function index() {
  return (
    <Wrapper>
     <Home /> 
    </Wrapper>
  )
}
