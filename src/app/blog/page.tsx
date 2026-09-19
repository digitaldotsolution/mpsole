import Blog from '@/components/blog'
import Wrapper from '@/layouts/Wrapper'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Blog & Footwear Industry Insights | MP Sole® Manufacturing',
  description: 'Read the latest technical articles, material innovations, EVA/TPU/Rubber compounding advancements, and footwear tooling insights from MP Sole®.',
}

export default function index() {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}
