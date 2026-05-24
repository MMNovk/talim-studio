"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  joined: string;
  specialization: string;
  imageSrc: string;
  thumbnailSrc: string;
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [flippedMain, setFlippedMain] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => { setFlippedMain(false) }, [currentIndex]);

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  const imageVariants = {
    enter: (direction: "left" | "right") => ({
      y: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      y: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[650px] md:min-h-[600px] overflow-hidden p-8 md:p-12 max-md:pt-2",
        className
      )}
      style={{ backgroundColor: "#F7F3EE", paddingBottom: "120px" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
        {/* Left Column */}
        <div className="md:col-span-3 flex flex-col justify-between order-4 md:order-1">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-4">
            <span className="text-sm font-mono" style={{ color: "#8C7B6E" }}>
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
          <div className="md:hidden flex items-center justify-end gap-2 mb-2">
            <button onClick={handlePrev} style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer' }}>
              <ArrowLeft size={16} color="#8C7B6E" />
            </button>
            <button onClick={handleNext} style={{ background: 'none', border: 'none', padding: '4px', cursor: 'pointer' }}>
              <ArrowRight size={16} color="#8C7B6E" />
            </button>
          </div>
          <div className="flex space-x-2 mt-0 md:mt-0">
            {thumbnailReviews.map((review) => {
              const originalIndex = reviews.findIndex((r) => r.id === review.id);
              return (
                <button
                  key={review.id}
                  onClick={() => handleThumbnailClick(originalIndex)}
                  className="overflow-hidden rounded-md w-16 h-20 md:w-20 md:h-24 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
                  aria-label={`View ${review.name}`}
                >
                  <img
                    src={review.thumbnailSrc}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Column: Main Image */}
        <div className="md:col-span-4 relative h-80 min-h-[400px] md:min-h-[500px] order-2 md:order-2">
          <div style={{ perspective: '1000px', width: '100%', height: '100%', cursor: isMobile ? 'pointer' : 'default' }} onClick={isMobile ? () => setFlippedMain(f => !f) : undefined}>
            <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 0.6s ease', transform: flippedMain ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
              <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden' }}>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentIndex}
                    src={activeReview.imageSrc}
                    alt={activeReview.name}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </AnimatePresence>
              </div>
              <div style={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', backgroundColor: '#1C1814', borderRadius: 8, padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
                <p style={{ fontFamily: 'DM Sans', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B5623E', margin: 0 }}>{activeReview.affiliation}</p>
                <p style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 32, color: '#F7F3EE', margin: 0, lineHeight: 1.1 }}>{activeReview.name}</p>
                <div style={{ width: 32, height: 1, backgroundColor: '#8C7B6E' }} />
                <p style={{ fontFamily: 'DM Sans', fontWeight: 300, fontStyle: 'italic', fontSize: 14, color: '#8C7B6E', margin: 0, lineHeight: 1.7 }}>{activeReview.quote}</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#B5623E', margin: 0 }}>{activeReview.specialization}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile tap prompt */}
        <p
          className="md:hidden"
          style={{ order: 3, fontFamily: 'DM Sans, sans-serif', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8C7B6E', opacity: 0.6, margin: 0, paddingLeft: 4 }}
        >
          Tap a portrait to learn more
        </p>

        {/* Right Column: Text and Navigation */}
        <div className="hidden md:flex flex-col justify-between md:pl-8 order-3 md:order-3">
          <div className="relative overflow-hidden pt-4 md:pt-24 min-h-[200px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <p style={{ fontFamily: "DM Sans", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B5623E" }}>
                  {activeReview.affiliation}
                </p>
                <h3 style={{ fontFamily: "Cormorant Garamond", fontWeight: 300, fontSize: "40px", color: "#1C1814", marginTop: "8px" }}>
                  {activeReview.name}
                </h3>
                <blockquote style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", color: "#8C7B6E", marginTop: "24px", lineHeight: 1.6 }}>
                  &ldquo;{activeReview.quote}&rdquo;
                </blockquote>
                <p style={{ fontFamily: "DM Sans", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8C7B6E", marginTop: "24px" }}>
                  {activeReview.joined}
                </p>
                <p style={{ fontFamily: "DM Sans", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#B5623E", marginTop: "8px" }}>
                  {activeReview.specialization}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden md:flex items-center space-x-2 mt-8 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12"
              style={{ borderColor: '#D4C9BC' }}
              onClick={handlePrev}
              aria-label="Previous"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full w-12 h-12"
              style={{ backgroundColor: '#1C1814', color: '#F7F3EE' }}
              onClick={handleNext}
              aria-label="Next"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
