"use client"
import React from 'react'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'
import Breadcrumb from '../common/Breadcrumb'
import AboutArea from '@/components/home/AboutArea'
import StickySoleTypesArea from './StickySoleTypesArea'
import StaticSoleCardsArea from './StaticSoleCardsArea'
import FaqArea from './FaqArea'

export default function About() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb 
              title="About MP Sole® – Shoe Sole Manufacturer in Pakistan" 
              subtitle="Footwear Sole Manufacturing, Custom Tooling & Production Since 1990" 
            />
            <AboutArea />
            <StickySoleTypesArea />
            <FaqArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
