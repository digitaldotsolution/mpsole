
import React from 'react'

export default function Breadcrumb({ title, subtitle, style_2, style_3, style_4, titleStyle }: any) {
  const isLong = title && title.length > 25;

  return (
    <>
      <section 
        className="single-page-hero-area"
        style={isLong ? { paddingTop: "140px", paddingBottom: "35px" } : {}}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 text-center">
              <h2 
                style={{
                  fontSize: isLong ? "clamp(24px, 3.2vw, 38px)" : undefined,
                  lineHeight: isLong ? "1.25" : undefined,
                  maxWidth: isLong ? "950px" : undefined,
                  margin: isLong ? "0 auto 12px auto" : undefined,
                  paddingBottom: isLong ? "0px" : undefined,
                  letterSpacing: isLong ? "0.5px" : undefined,
                  ...titleStyle
                }}
              >
                {title}
              </h2>
              {subtitle && <p style={{ padding: "0 20px", maxWidth: "800px", margin: "0 auto" }}>{subtitle}</p>}
              {style_2 &&
                <p>A Collection of My Latest Works and Achievements: Discover the Projects that Define My Passion and Skills</p>
              }
              {style_3 &&
                <p>Fill out the form below to get in touch with me. I am always excited to hear about new opportunities and I will do my best to respond to your inquiry within 24 hours.</p>
              }
              {style_4 &&
                <p>Stories, Advice, and Inspiration for the Curious Mind</p>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

