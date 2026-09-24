

import React from 'react'

import type { Metadata } from 'next'
import Wrapper from '@/layouts/Wrapper'
import BlogDetails from '@/components/blog-details'
export const metadata: Metadata = {
  title: 'Best Quality Shoe Sole Manufacturing in Karachi, Pakistan | MP Sole®',
  description: 'Discover best quality shoe sole manufacturing in Karachi, Pakistan. Skilled workers, strong materials & trusted quality for all shoe types.',
}



export default function index() {
  return (
    <Wrapper>
      <BlogDetails />
    </Wrapper>
  )
}
