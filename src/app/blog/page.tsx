import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Shoe Sole Manufacturing Blog | MP Sole® Footwear Industry Insights Pakistan',
  description: 'Explore footwear industry insights, polymer compounding advancements, sole manufacturing guides, and factory updates from MP Sole® in Karachi, Pakistan.',
  alternates: {
    canonical: 'https://mpsolemanufacture.com/blog',
  },
}

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}
