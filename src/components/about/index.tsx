"use client"
import React from 'react'
import HeaderOne from '@/layouts/headers/HeaderOne'
import FooterOne from '@/layouts/footers/FooterOne'
import Breadcrumb from '../common/Breadcrumb'
import AboutArea from '@/components/home/AboutArea'
import StickySoleTypesArea from './StickySoleTypesArea'
import StaticSoleCardsArea from './StaticSoleCardsArea'

export default function About() {
  return (
    <>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb 
              title="About MP Sole®" 
              subtitle="Pioneering High-Precision Footwear Soles & Advanced Polymer Tooling Since 1990" 
            />
            <AboutArea />
            <StickySoleTypesArea />
            <StaticSoleCardsArea />
          </main>
          <FooterOne />
        </div>
      </div>
    </>
  )
}
