"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("animate-scaleIn")
      titleRef.current.addEventListener("animationend", () => {
        titleRef.current?.classList.add("animate-complete")
      })
    }
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current?.classList.add("animate-fadeInUp")
        subtitleRef.current?.addEventListener("animationend", () => {
          subtitleRef.current?.classList.add("animate-complete")
        })
      }, 300)
    }
    if (buttonsRef.current) {
      setTimeout(() => {
        buttonsRef.current?.classList.add("animate-fadeInUp")
        buttonsRef.current?.addEventListener("animationend", () => {
          buttonsRef.current?.classList.add("animate-complete")
        })
      }, 600)
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-orange-500">
      <div className="text-center">
        <h1 ref={titleRef} className="text-6xl font-bold text-white mb-4 opacity-0">
          LOU
        </h1>
        <p ref={subtitleRef} className="text-2xl text-orange-100 mb-8 opacity-0">
          Your Trusted Partner in Innovation
        </p>
        <div ref={buttonsRef} className="space-x-4 opacity-0">
          <button className="animated-button bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100 transition-colors duration-300">
            <span>Get Started</span>
          </button>
          <button className="animated-button bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors duration-300">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </section>
  )
}

