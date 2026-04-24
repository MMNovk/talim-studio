"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface Project {
  title: string
  description: string
  year: string
  link: string
  image: string
}

const projects: Project[] = [
  {
    title: "HydraFacial",
    description: "Full cleanse, extraction, and hydration in one session.",
    year: "$185 · 60 MIN",
    link: "#book",
    image: "https://images.unsplash.com/photo-1707303674503-83668192088e?q=80&w=1064&auto=format&fit=crop",
  },
  {
    title: "LED Therapy",
    description: "Light wavelengths that calm, repair, and restore.",
    year: "$95 · 45 MIN",
    link: "#book",
    image: "https://images.unsplash.com/photo-1731515067388-d5df113d4326?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Microneedling",
    description: "Controlled micro-channels for collagen stimulation.",
    year: "$275 · 75 MIN",
    link: "#book",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop",
  },
  {
    title: "Gua Sha",
    description: "Ancient lymphatic technique adapted for modern skin.",
    year: "$120 · 60 MIN",
    link: "#book",
    image: "https://images.unsplash.com/photo-1643379855211-45b5a4ef44c4?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Chemical Peel",
    description: "Precision exfoliation revealing fresh, even skin beneath.",
    year: "$150 · 45 MIN",
    link: "#book",
    image: "https://images.unsplash.com/photo-1761718210089-ba3bb5ccb54f?q=80&w=987&auto=format&fit=crop",
  },
  {
    title: "Bespoke Facial",
    description: "A fully custom treatment built around your skin that day.",
    year: "$220 · 90 MIN",
    link: "#book",
    image: "https://images.unsplash.com/photo-1614859278743-2a95e7d1e834?q=80&w=987&auto=format&fit=crop",
  },
]

export default function TreatmentGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [visible, setVisible] = useState(false)
  const [smoothPosition, setSmoothPosition] = useState<{ x: number; y: number } | null>(null)
  const mousePosition = useRef<{ x: number; y: number } | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const animate = () => {
      if (mousePosition.current) {
        setSmoothPosition((prev) => ({
          x: lerp(prev?.x ?? mousePosition.current!.x, mousePosition.current!.x, 0.15),
          y: lerp(prev?.y ?? mousePosition.current!.y, mousePosition.current!.y, 0.15),
        }))
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    mousePosition.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setVisible(true)
  }

  const handleMouseLeave = () => {
    setVisible(false)
    setHoveredIndex(null)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{ background: "#F7F3EE", position: "relative" }}
      className="w-full px-8 md:px-16 py-24"
    >
      {/* TREATMENTS label — horizontal, top left */}
      <div style={{ marginBottom: 48 }}>
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 400,
          fontSize: 11,
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#8C7B6E',
          margin: 0,
        }}>
          TREATMENTS
        </p>
      </div>

      {/* Floating image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 50,
          width: 220,
          height: 280,
          borderRadius: "8px",
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.35s ease",
          transform: smoothPosition
            ? `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 160}px, 0)`
            : "translate3d(-9999px, -9999px, 0)",
        }}
      >
        {hoveredIndex !== null && (
          <img
            src={projects[hoveredIndex].image}
            alt={projects[hoveredIndex].title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        )}
      </div>

      {/* 2-column grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          borderTop: "1px solid #D4C9BC",
          borderLeft: "1px solid #D4C9BC",
        }}
      >
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            style={{
              display: "block",
              textDecoration: "none",
              padding: 40,
              borderRight: "1px solid #D4C9BC",
              borderBottom: "1px solid #D4C9BC",
              backgroundColor: hoveredIndex === index ? "#F0EBE4" : "#F7F3EE",
              transition: "background-color 300ms ease",
              position: "relative",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Title with scoped underline */}
            <h3
              style={{
                fontFamily: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                color: "#1C1814",
                margin: 0,
                marginBottom: 20,
                lineHeight: 1.1,
                position: "relative",
                display: "inline-block",
              }}
            >
              {project.title}
              <span
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  height: 1,
                  width: hoveredIndex === index ? "100%" : "0%",
                  backgroundColor: "#B5623E",
                  transition: "width 0.4s cubic-bezier(0.76, 0, 0.24, 1)",
                }}
              />
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 300,
                fontSize: 14,
                color: "#8C7B6E",
                margin: 0,
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>

            {/* Year / price */}
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 400,
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B5623E",
              }}
            >
              {project.year}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
