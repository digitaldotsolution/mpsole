
import React from 'react'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Breadcrumb from '../common/Breadcrumb'
import ContactArea from '../home/ContactArea'
import FooterOne from '@/layouts/footers/FooterOne'

export default function Contact() {
  return (
    <>

      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Contact MP Sole Manufacture" subtitle="Fill out the form below to get in touch with our sole engineering team. We respond within 24 hours." />
            <ContactArea />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
