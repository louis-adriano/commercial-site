"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null)
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-orange-400">
      <div className="text-center">
        <div ref={titleRef} className="mx-auto mb-12 opacity-0">
          <img src="/image/logo.png" alt="TLA Logo" className="w-80 h-80 md:w-96 md:h-96 object-contain mx-auto" />
        </div>
        <p ref={subtitleRef} className="text-2xl text-white mb-8 opacity-0">
          Your Trusted Partner in Innovation
        </p>
        <div ref={buttonsRef} className="space-x-4 opacity-0">
          <button className="animated-button bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-orange-100 transition-colors duration-300">
            <span>Get Started</span>
          </button>
          <button className="animated-button bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
            <span>Learn More</span>
          </button>
        </div>
      </div>
    </section>
  )
}

