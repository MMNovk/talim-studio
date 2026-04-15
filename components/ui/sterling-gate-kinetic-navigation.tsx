'use client'

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { CustomEase } from "gsap/CustomEase"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import "./sterling-gate-kinetic-navigation.css"

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase)
}

interface NavItem {
  label: string
  href: string
}

interface ComponentProps {
  items: NavItem[]
}

export function Component({ items }: ComponentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Hover shape effects
  useEffect(() => {
    if (!containerRef.current) return

    try {
      if (!gsap.parseEase("main")) {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99")
        gsap.defaults({ ease: "main", duration: 0.7 })
      }
    } catch {
      gsap.defaults({ ease: "power2.out", duration: 0.7 })
    }

    const ctx = gsap.context(() => {
      const menuItems = containerRef.current!.querySelectorAll(".menu-list-item[data-shape]")
      const shapesContainer = containerRef.current!.querySelector(".ambient-background-shapes")

      menuItems.forEach((item) => {
        const shapeIndex = item.getAttribute("data-shape")
        const shape = shapesContainer?.querySelector(`.bg-shape-${shapeIndex}`) ?? null
        if (!shape) return

        const shapeEls = shape.querySelectorAll(".shape-element")

        const onEnter = () => {
          shapesContainer?.querySelectorAll(".bg-shape").forEach((s) => s.classList.remove("active"))
          shape.classList.add("active")
          gsap.fromTo(
            shapeEls,
            { scale: 0.5, opacity: 0, rotation: -10 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.6, stagger: 0.08, ease: "back.out(1.7)", overwrite: "auto" }
          )
        }

        const onLeave = () => {
          gsap.to(shapeEls, {
            scale: 0.8, opacity: 0, duration: 0.3, ease: "power2.in",
            onComplete: () => shape.classList.remove("active"),
            overwrite: "auto",
          })
        }

        item.addEventListener("mouseenter", onEnter)
        item.addEventListener("mouseleave", onLeave)
        ;(item as any)._cleanup = () => {
          item.removeEventListener("mouseenter", onEnter)
          item.removeEventListener("mouseleave", onLeave)
        }
      })
    }, containerRef)

    return () => {
      ctx.revert()
      containerRef.current?.querySelectorAll(".menu-list-item[data-shape]").forEach((item: any) => item._cleanup?.())
    }
  }, [])

  // Open/close animation — button text/icon driven by CSS via data-open attr
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const navWrap = containerRef.current!.querySelector(".nav-overlay-wrapper")
      const menu = containerRef.current!.querySelector(".menu-content")
      const overlay = containerRef.current!.querySelector(".overlay")
      const bgPanels = containerRef.current!.querySelectorAll(".backdrop-layer")
      const menuLinks = containerRef.current!.querySelectorAll(".nav-link")
      const fadeTargets = containerRef.current!.querySelectorAll("[data-menu-fade]")

      const tl = gsap.timeline()

      if (isMenuOpen) {
        navWrap?.setAttribute("data-nav", "open")
        tl.set(navWrap, { display: "block" }).set(menu, { xPercent: 0 }, "<")
        tl.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
          .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
          .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35")
        if (fadeTargets.length) {
          tl.fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04, clearProps: "all" }, "<+=0.2")
        }
      } else {
        navWrap?.setAttribute("data-nav", "closed")
        tl.to(overlay, { autoAlpha: 0 }).to(menu, { xPercent: 120 }, "<")
        tl.set(navWrap, { display: "none" })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isMenuOpen])

  // Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) setIsMenuOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div ref={containerRef}>
      {/* Trigger button */}
      <button
        onClick={toggleMenu}
        style={{ pointerEvents: "auto", background: "none", border: "none", cursor: "pointer", color: "white", padding: 0 }}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <MenuToggleIcon open={isMenuOpen} className="size-7" duration={500} />
      </button>

      {/* Fullscreen overlay */}
      <section className="fixed inset-0 z-[200] pointer-events-none">
        <div data-nav="closed" className="nav-overlay-wrapper fixed inset-0 z-[200] pointer-events-auto">
          <div className="overlay" onClick={closeMenu} />
          <nav className="menu-content">
            {/* Close button inside the panel — always reachable */}
            <button
              onClick={closeMenu}
              style={{ position: "absolute", top: "1.25rem", right: "1.5rem", zIndex: 20, background: "none", border: "none", cursor: "pointer", color: "white", padding: 0 }}
              aria-label="Close menu"
            >
              <MenuToggleIcon open={true} className="size-7" duration={500} />
            </button>

            <div className="menu-bg">
              <div className="backdrop-layer first" />
              <div className="backdrop-layer second" />
              <div className="backdrop-layer" />

              <div className="ambient-background-shapes">
                <svg className="bg-shape bg-shape-1" viewBox="0 0 400 400" fill="none">
                  <circle className="shape-element" cx="80" cy="120" r="40" fill="rgba(255,255,255,0.04)" />
                  <circle className="shape-element" cx="300" cy="80" r="60" fill="rgba(255,255,255,0.03)" />
                  <circle className="shape-element" cx="200" cy="300" r="80" fill="rgba(255,255,255,0.02)" />
                </svg>
                <svg className="bg-shape bg-shape-2" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M0 200 Q100 100, 200 200 T 400 200" stroke="rgba(255,255,255,0.06)" strokeWidth="50" fill="none" />
                  <path className="shape-element" d="M0 280 Q100 180, 200 280 T 400 280" stroke="rgba(255,255,255,0.04)" strokeWidth="35" fill="none" />
                </svg>
                <svg className="bg-shape bg-shape-3" viewBox="0 0 400 400" fill="none">
                  {[50,150,250,350].map((x) => (
                    <circle key={x} className="shape-element" cx={x} cy="150" r="8" fill="rgba(255,255,255,0.08)" />
                  ))}
                  {[100,200,300].map((x) => (
                    <circle key={x} className="shape-element" cx={x} cy="260" r="12" fill="rgba(255,255,255,0.06)" />
                  ))}
                </svg>
                <svg className="bg-shape bg-shape-4" viewBox="0 0 400 400" fill="none">
                  <path className="shape-element" d="M100 100 Q150 50, 200 100 Q250 150, 200 200 Q150 250, 100 200 Q50 150, 100 100" fill="rgba(255,255,255,0.04)" />
                </svg>
              </div>
            </div>

            <div className="menu-content-wrapper">
              <ul className="menu-list">
                {items.map((item, i) => (
                  <li key={item.href} className="menu-list-item" data-shape={String(i + 1)}>
                    <a
                      href={item.href}
                      className="nav-link w-inline-block"
                      onClick={closeMenu}
                    >
                      <p className="nav-link-text">{item.label}</p>
                      <div className="nav-link-hover-bg" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  )
}
