
import React from 'react'

export default function ResumeArea() {
  return (
    <>
      <div className="resume-area no-padding" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="resume-wrapper wow fadeInUp delay-0-2s">

                <div className="resume-box">
                  <span className="resume-date">2020 - Present</span>
                  <h2>High-Volume Automated Injection Molding</h2>
                  <span>@ Primary Compounding Facility</span>
                  <p>State-of-the-art multi-station dual-color hydraulic injection and compression presses capable of 500,000+ pairs monthly with zero compound shrinkage defect.</p>
                </div>

                <div className="resume-box">
                  <span className="resume-date">2018 - Present</span>
                  <h2>Aerospace 3K Carbon Plate Integration</h2>
                  <span>@ Advanced Composites Lab</span>
                  <p>Specialized vacuum autoclave consolidation for marathon race outsoles, delivering up to 88% kinetic propulsion rebound with ultra-light structural rigidity.</p>
                </div>

              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="resume-wrapper wow fadeInUp delay-0-4s">

                <div className="resume-box">
                  <span className="resume-date">2015 - Present</span>
                  <h2>5-Axis CNC Steel & Aluminum Mold Tooling</h2>
                  <span>@ Precision Tooling Studio</span>
                  <p>In-house computerized CNC mold milling with 0.02mm tolerance for intricate multi-directional outsole tread geometries and deep mud-clearing lugs.</p>
                </div>

                <div className="resume-box">
                  <span className="resume-date">ISO 9001:2015</span>
                  <h2>Shore Durometer & Flex Fatigue Testing</h2>
                  <span>@ Quality Assurance Division</span>
                  <p>Rigorous mechanical lab validation covering 200,000+ continuous flex cycles, DIN abrasion testing, and SATRA slip-resistance coefficient verification.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
