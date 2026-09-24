"use client"
import React, { useRef, useState } from 'react'

interface VideoItem {
  id: number
  title: string
  tag: string
  videoSrc: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Automated Sole Injection & Tooling",
    tag: "Production Run",
    videoSrc: "/assets/videos/video1.mp4"
  },
  {
    id: 2,
    title: "Precision Mold Finishing & Quality Control",
    tag: "Live Factory Floor",
    videoSrc: "/assets/videos/video2.mp4"
  }
]

function VideoCard({ item }: { item: VideoItem }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="col-lg-5 col-md-6 col-11">
      <div 
        onClick={togglePlay}
        style={{
          width: '100%',
          aspectRatio: '9 / 16',
          borderRadius: '24px',
          background: '#111111',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, border-color 0.3s ease'
        }}
      >
        {/* Video Element - Permanently Muted */}
        <video
          ref={videoRef}
          src={item.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Top Floating Badge */}
        <div 
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 3
          }}
        >
          <span
            style={{
              padding: '5px 12px',
              borderRadius: '100px',
              background: 'rgba(0, 0, 0, 0.65)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            {item.tag}
          </span>
        </div>

        {/* Play/Pause Center Indicator when paused */}
        {!isPlaying && (
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(6px)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              zIndex: 3,
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <i className="ri-play-fill" style={{ marginLeft: '3px' }}></i>
          </div>
        )}

        {/* Bottom Gradient with Title */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '40px 22px 22px 22px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
            zIndex: 2,
            color: '#ffffff'
          }}
        >
          <h4 
            style={{
              color: '#ffffff',
              fontSize: '19px',
              fontWeight: 600,
              fontFamily: 'var(--title-font)',
              letterSpacing: '0.5px',
              marginBottom: '6px',
              lineHeight: '1.3'
            }}
          >
            {item.title}
          </h4>
          <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '12px', margin: 0 }}>
            Tap anywhere to {isPlaying ? "pause" : "play"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioArea() {
  return (
    <div 
      className="projects-area" 
      id="portfolio" 
      style={{ 
        background: '#070707', 
        paddingTop: '100px', 
        paddingBottom: '100px',
        color: '#ffffff',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="row mb-50">
          <div className="col-12 text-center">
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366', display: 'inline-block' }}></span>
              Factory Floor In Action
            </div>
            <h2 
              style={{
                fontFamily: 'var(--title-font)',
                fontSize: '40px',
                color: '#ffffff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: 0
              }}
            >
              Recent Work & Production Runs
            </h2>
          </div>
        </div>

        {/* 9:16 TikTok Vertical Video Cards */}
        <div className="row justify-content-center g-4">
          {videos.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}
