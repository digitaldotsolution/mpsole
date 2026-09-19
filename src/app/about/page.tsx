
import About from '@/components/about'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About MP Sole® - High-Precision Footwear Sole Manufacturer Since 1990',
  description: 'Learn about MP Sole®: A premier contract manufacturer and compounder of high-precision footwear outsoles, ergonomic midsoles, and carbon plates since 1990.',
}


export default function index() {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  )
}
