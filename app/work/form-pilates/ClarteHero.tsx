'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './clarte-hero.css'

const slides = [
  {
    title: 'HydraFacial',
    description: 'Deep cleanse, extract, and hydrate in one transformative session.',
    media: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&auto=format&fit=crop',
  },
  {
    title: 'LED Therapy',
    description: 'Wavelengths of light working beneath the surface to restore and renew.',
    media: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1400&auto=format&fit=crop',
  },
  {
    title: 'Microneedling',
    description: "Precision micro-channels that awaken your skin's natural repair.",
    media: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1400&auto=format&fit=crop',
  },
  {
    title: 'Gua Sha Ritual',
    description: 'An ancient practice, refined for the modern complexion.',
    media: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1400&auto=format&fit=crop',
  },
  {
    title: 'Chemical Peel',
    description: 'Controlled renewal that reveals the skin you were meant to have.',
    media: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1400&auto=format&fit=crop',
  },
  {
    title: 'Bespoke Facial',
    description: 'Formulated entirely around you. No two are ever the same.',
    media: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1400&auto=format&fit=crop',
  },
]

export default function ClarteHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mounted = true
    let animFrameId: number
    let progressAnimation: ReturnType<typeof setInterval> | null = null
    let autoSlideTimer: ReturnType<typeof setTimeout> | null = null
    let rendererRef: any = null
    let texturesRef: any[] = []

    const init = async () => {
      const THREE = await import('three')

      if (!mounted) return

      const TRANSITION_DURATION = 2.5
      const AUTO_SLIDE_SPEED = 5000
      const PROGRESS_INTERVAL = 50

      let currentSlideIndex = 0
      let isTransitioning = false
      let shaderMaterial: any, renderer: any, scene: any, camera: any
      let slideTextures: any[] = []
      let texturesLoaded = false
      let sliderEnabled = false

      // ── SHADERS ──────────────────────────────────────────────────────
      const vertexShader = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`

      const fragmentShader = `
        uniform sampler2D uTexture1, uTexture2;
        uniform float uProgress;
        uniform vec2 uResolution, uTexture1Size, uTexture2Size;
        uniform int uEffectType;
        uniform float uGlobalIntensity, uSpeedMultiplier, uDistortionStrength, uColorEnhancement;
        uniform float uGlassRefractionStrength, uGlassChromaticAberration, uGlassBubbleClarity, uGlassEdgeGlow, uGlassLiquidFlow;
        varying vec2 vUv;

        vec2 getCoverUV(vec2 uv, vec2 textureSize) {
          vec2 s = uResolution / textureSize;
          float scale = max(s.x, s.y);
          vec2 scaledSize = textureSize * scale;
          vec2 offset = (uResolution - scaledSize) * 0.5;
          return (uv * uResolution - offset) / scaledSize;
        }

        vec4 glassEffect(vec2 uv, float progress) {
          float time = progress * 5.0 * uSpeedMultiplier;
          vec2 uv1 = getCoverUV(uv, uTexture1Size);
          vec2 uv2 = getCoverUV(uv, uTexture2Size);
          float maxR = length(uResolution) * 0.85;
          float br = progress * maxR;
          vec2 p = uv * uResolution;
          vec2 c = uResolution * 0.5;
          float d = length(p - c);
          float nd = d / max(br, 0.001);
          float param = smoothstep(br + 3.0, br - 3.0, d);
          vec4 img;
          if (param > 0.0) {
            float ro = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity * pow(smoothstep(0.3 * uGlassBubbleClarity, 1.0, nd), 1.5);
            vec2 dir = (d > 0.0) ? (p - c) / d : vec2(0.0);
            vec2 distUV = uv2 - dir * ro;
            distUV += vec2(sin(time + nd * 10.0), cos(time * 0.8 + nd * 8.0)) * 0.015 * uGlassLiquidFlow * uSpeedMultiplier * nd * param;
            float ca = 0.02 * uGlassChromaticAberration * uGlobalIntensity * pow(smoothstep(0.3, 1.0, nd), 1.2);
            img = vec4(
              texture2D(uTexture2, distUV + dir * ca * 1.2).r,
              texture2D(uTexture2, distUV + dir * ca * 0.2).g,
              texture2D(uTexture2, distUV - dir * ca * 0.8).b,
              1.0
            );
            float rim = smoothstep(0.95, 1.0, nd) * (1.0 - smoothstep(1.0, 1.01, nd));
            img.rgb += rim * 0.08 * uGlassEdgeGlow * uGlobalIntensity;
          } else {
            img = texture2D(uTexture2, uv2);
          }
          vec4 oldImg = texture2D(uTexture1, uv1);
          if (progress > 0.95) img = mix(img, texture2D(uTexture2, uv2), (progress - 0.95) / 0.05);
          return mix(oldImg, img, param);
        }

        void main() {
          gl_FragColor = glassEffect(vUv, uProgress);
        }
      `

      // ── TEXT SPLIT ────────────────────────────────────────────────────
      const splitText = (text: string) =>
        text.split('').map(c => `<span style="display:inline-block;opacity:0">${c === ' ' ? '&nbsp;' : c}</span>`).join('')

      // ── UPDATE CONTENT ────────────────────────────────────────────────
      const updateContent = (idx: number) => {
        const titleEl = document.getElementById('clarteMainTitle')
        const descEl  = document.getElementById('clarteMainDesc')
        if (!titleEl || !descEl) return

        gsap.to(titleEl.children, { y: -20, opacity: 0, duration: 0.5, stagger: 0.02, ease: 'power2.in' })
        gsap.to(descEl, { y: -10, opacity: 0, duration: 0.4, ease: 'power2.in' })

        setTimeout(() => {
          if (!mounted) return
          titleEl.innerHTML = splitText(slides[idx].title)
          descEl.textContent = slides[idx].description
          gsap.set(titleEl.children, { opacity: 0 })
          gsap.set(descEl, { y: 20, opacity: 0 })

          const ch = titleEl.children
          switch (idx) {
            case 0:
              gsap.set(ch, { y: 20 })
              gsap.to(ch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
              break
            case 1:
              gsap.set(ch, { y: -20 })
              gsap.to(ch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'back.out(1.7)' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
              break
            case 2:
              gsap.set(ch, { filter: 'blur(10px)', scale: 1.5, y: 0 })
              gsap.to(ch, { filter: 'blur(0px)', scale: 1, opacity: 1, duration: 1, stagger: { amount: 0.5, from: 'random' }, ease: 'power2.out' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' })
              break
            case 3:
              gsap.set(ch, { scale: 0, y: 0 })
              gsap.to(ch, { scale: 1, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.5)' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
              break
            case 4:
              gsap.set(ch, { rotationX: 90, y: 0, transformOrigin: '50% 50%' })
              gsap.to(ch, { rotationX: 0, opacity: 1, duration: 0.8, stagger: 0.04, ease: 'power2.out' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power2.out' })
              break
            case 5:
              gsap.set(ch, { x: 30, y: 0 })
              gsap.to(ch, { x: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
              break
            default:
              gsap.set(ch, { y: 20 })
              gsap.to(ch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.03, ease: 'power3.out' })
              gsap.to(descEl, { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' })
          }
        }, 500)
      }

      // ── NAVIGATION ───────────────────────────────────────────────────
      const updateNavState = (idx: number) =>
        document.querySelectorAll('.slide-nav-item').forEach((el, i) => el.classList.toggle('active', i === idx))

      const updateCounter = (idx: number) => {
        const sn = document.getElementById('clarteSlideNumber')
        if (sn) sn.textContent = String(idx + 1).padStart(2, '0')
        const st = document.getElementById('clarteSlideTotal')
        if (st) st.textContent = String(slides.length).padStart(2, '0')
      }

      const updateProgress = (idx: number, pct: number) => {
        const el = document.querySelectorAll('.slide-nav-item')[idx]?.querySelector('.slide-progress-fill') as HTMLElement | null
        if (el) { el.style.width = `${pct}%`; el.style.opacity = '1' }
      }

      const quickResetProgress = (idx: number) => {
        const el = document.querySelectorAll('.slide-nav-item')[idx]?.querySelector('.slide-progress-fill') as HTMLElement | null
        if (el) {
          el.style.transition = 'width 0.2s ease-out'
          el.style.width = '0%'
          setTimeout(() => { el.style.transition = 'width 0.1s ease, opacity 0.3s ease' }, 200)
        }
      }

      // ── TIMER ────────────────────────────────────────────────────────
      const stopTimer = () => {
        if (progressAnimation) clearInterval(progressAnimation)
        if (autoSlideTimer) clearTimeout(autoSlideTimer)
        progressAnimation = null
        autoSlideTimer = null
      }

      const startTimer = () => {
        if (!texturesLoaded || !sliderEnabled || !mounted) return
        stopTimer()
        let pct = 0
        const increment = (100 / AUTO_SLIDE_SPEED) * PROGRESS_INTERVAL
        progressAnimation = setInterval(() => {
          if (!sliderEnabled || !mounted) { stopTimer(); return }
          pct += increment
          updateProgress(currentSlideIndex, pct)
          if (pct >= 100) {
            clearInterval(progressAnimation!)
            progressAnimation = null
            if (!isTransitioning) handleSlideChange()
          }
        }, PROGRESS_INTERVAL)
      }

      const safeStartTimer = (delay = 0) => {
        stopTimer()
        if (sliderEnabled && texturesLoaded && mounted) {
          if (delay > 0) autoSlideTimer = setTimeout(startTimer, delay)
          else startTimer()
        }
      }

      // ── NAVIGATE ─────────────────────────────────────────────────────
      const navigateToSlide = (targetIndex: number) => {
        if (isTransitioning || targetIndex === currentSlideIndex) return
        stopTimer()
        quickResetProgress(currentSlideIndex)

        const fromTex = slideTextures[currentSlideIndex]
        const toTex   = slideTextures[targetIndex]
        if (!fromTex || !toTex) return

        isTransitioning = true
        shaderMaterial.uniforms.uTexture1.value     = fromTex
        shaderMaterial.uniforms.uTexture2.value     = toTex
        shaderMaterial.uniforms.uTexture1Size.value = fromTex.userData.size
        shaderMaterial.uniforms.uTexture2Size.value = toTex.userData.size

        updateContent(targetIndex)
        currentSlideIndex = targetIndex
        updateCounter(currentSlideIndex)
        updateNavState(currentSlideIndex)

        gsap.fromTo(
          shaderMaterial.uniforms.uProgress,
          { value: 0 },
          {
            value: 1,
            duration: TRANSITION_DURATION,
            ease: 'power2.inOut',
            onComplete: () => {
              shaderMaterial.uniforms.uProgress.value     = 0
              shaderMaterial.uniforms.uTexture1.value     = toTex
              shaderMaterial.uniforms.uTexture1Size.value = toTex.userData.size
              isTransitioning = false
              safeStartTimer(100)
            },
          }
        )
      }

      const handleSlideChange = () => {
        if (isTransitioning || !texturesLoaded || !sliderEnabled) return
        navigateToSlide((currentSlideIndex + 1) % slides.length)
      }

      // ── BUILD NAV ────────────────────────────────────────────────────
      const createNav = () => {
        const nav = document.getElementById('clarteSlidesNav')
        if (!nav) return
        nav.innerHTML = ''
        slides.forEach((slide, i) => {
          const item = document.createElement('div')
          item.className = `slide-nav-item${i === 0 ? ' active' : ''}`
          item.dataset.slideIndex = String(i)
          item.innerHTML = `<div class="slide-progress-line"><div class="slide-progress-fill"></div></div><div class="slide-nav-title">${slide.title}</div>`
          item.addEventListener('click', (e) => {
            e.stopPropagation()
            if (!isTransitioning && i !== currentSlideIndex) {
              stopTimer()
              quickResetProgress(currentSlideIndex)
              navigateToSlide(i)
            }
          })
          nav.appendChild(item)
        })
      }

      // ── THREE.JS RENDERER ─────────────────────────────────────────────
      const initRenderer = async () => {
        if (!containerRef.current) return
        const canvas = containerRef.current.querySelector('.webgl-canvas') as HTMLCanvasElement | null
        if (!canvas) return

        scene    = new THREE.Scene()
        camera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
        renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false })
        rendererRef = renderer
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        shaderMaterial = new THREE.ShaderMaterial({
          uniforms: {
            uTexture1:                { value: null },
            uTexture2:                { value: null },
            uProgress:                { value: 0 },
            uResolution:              { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uTexture1Size:            { value: new THREE.Vector2(1, 1) },
            uTexture2Size:            { value: new THREE.Vector2(1, 1) },
            uEffectType:              { value: 0 },
            uGlobalIntensity:         { value: 1.0 },
            uSpeedMultiplier:         { value: 1.0 },
            uDistortionStrength:      { value: 1.0 },
            uColorEnhancement:        { value: 1.0 },
            uGlassRefractionStrength: { value: 1.0 },
            uGlassChromaticAberration:{ value: 1.0 },
            uGlassBubbleClarity:      { value: 1.0 },
            uGlassEdgeGlow:           { value: 1.0 },
            uGlassLiquidFlow:         { value: 1.0 },
          },
          vertexShader,
          fragmentShader,
        })

        scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), shaderMaterial))

        const loader = new THREE.TextureLoader()
        loader.crossOrigin = 'anonymous'

        const loadTex = (src: string): Promise<any> =>
          new Promise((res, rej) => {
            loader.load(
              src,
              (t: any) => {
                t.minFilter = t.magFilter = THREE.LinearFilter
                t.userData  = { size: new THREE.Vector2(t.image.width, t.image.height) }
                res(t)
              },
              undefined,
              rej
            )
          })

        for (const s of slides) {
          try {
            slideTextures.push(await loadTex(s.media))
          } catch {
            console.warn('Texture failed:', s.media)
          }
        }
        texturesRef = slideTextures

        if (!mounted) return

        if (slideTextures.length >= 2) {
          shaderMaterial.uniforms.uTexture1.value     = slideTextures[0]
          shaderMaterial.uniforms.uTexture2.value     = slideTextures[1]
          shaderMaterial.uniforms.uTexture1Size.value = slideTextures[0].userData.size
          shaderMaterial.uniforms.uTexture2Size.value = slideTextures[1].userData.size
          texturesLoaded = true
          sliderEnabled  = true

          // FIX: containerRef.current IS the .slider-wrapper element
          containerRef.current?.classList.add('loaded')
          safeStartTimer(500)
        }

        const renderLoop = () => {
          if (!mounted) return
          animFrameId = requestAnimationFrame(renderLoop)
          renderer.render(scene, camera)
        }
        renderLoop()
      }

      // ── RESIZE ───────────────────────────────────────────────────────
      const onResize = () => {
        if (!renderer || !mounted) return
        renderer.setSize(window.innerWidth, window.innerHeight)
        shaderMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight)
      }
      const onVisibilityChange = () => {
        if (document.hidden) stopTimer()
        else if (!isTransitioning && mounted) safeStartTimer()
      }

      window.addEventListener('resize', onResize)
      document.addEventListener('visibilitychange', onVisibilityChange)

      // ── INIT TEXT + NAV ───────────────────────────────────────────────
      createNav()
      updateCounter(0)

      const tEl = document.getElementById('clarteMainTitle')
      const dEl = document.getElementById('clarteMainDesc')
      if (tEl && dEl) {
        tEl.innerHTML = splitText(slides[0].title)
        dEl.textContent = slides[0].description
        gsap.fromTo(tEl.children, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.03, ease: 'power3.out', delay: 0.5 })
        gsap.fromTo(dEl, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 })
      }

      await initRenderer()

      ;(containerRef as any)._removeListeners = () => {
        window.removeEventListener('resize', onResize)
        document.removeEventListener('visibilitychange', onVisibilityChange)
      }
    }

    init()

    return () => {
      mounted = false
      cancelAnimationFrame(animFrameId)
      if (progressAnimation) clearInterval(progressAnimation)
      if (autoSlideTimer)    clearTimeout(autoSlideTimer)
      if (rendererRef)       rendererRef.dispose()
      texturesRef.forEach(t => t?.dispose())
      ;(containerRef as any)?._removeListeners?.()
    }
  }, [])

  return (
    <main className="slider-wrapper" ref={containerRef as any}>
      {/* Clarté nav overlay */}
      <div className="clarte-top-nav">
        <span className="clarte-logo">Clarté</span>
        <a href="#booking" className="clarte-book-btn">Book Now</a>
      </div>

      <canvas className="webgl-canvas" />

      <span className="slide-number" id="clarteSlideNumber">01</span>
      <span className="slide-total"  id="clarteSlideTotal">06</span>

      <div className="slide-content">
        <h1 className="slide-title"       id="clarteMainTitle" />
        <p  className="slide-description" id="clarteMainDesc"  />
      </div>

      <nav className="slides-navigation" id="clarteSlidesNav" />
    </main>
  )
}
