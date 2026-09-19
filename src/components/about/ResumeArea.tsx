
import React from 'react'

export default function ResumeArea() {
  return (
    <>
      <div className="resume-area" id="resume" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="resume-wrapper wow fadeInUp delay-0-2s">

                <div className="resume-box">
                  <span className="resume-date">2020 - Present</span>
                  <h2>High-Volume Automated Injection Molding</h2>
                  <span>@ MP Sole® Primary Compounding Facility</span>
                  <p>State-of-the-art multi-station dual-color hydraulic injection and compression presses capable of 500,000+ pairs monthly with zero compound shrinkage defect.</p>
                </div>

              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="resume-wrapper wow fadeInUp delay-0-4s">

                <div className="resume-box">
                  <span className="resume-date">2015 - Present</span>
                  <h2>5-Axis CNC Steel & Aluminum Mold Tooling</h2>
                  <span>@ MP Sole® Precision Tooling Studio</span>
                  <p>In-house computerized CNC mold milling with 0.02mm tolerance for intricate multi-directional outsole tread geometries and deep mud-clearing lugs.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
