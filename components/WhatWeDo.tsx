"use client"

import { useEffect, useRef } from "react"

export default function WhatWeDo() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp")
            entry.target.addEventListener(
              "animationend",
              () => {
                entry.target.classList.add("animate-complete")
              },
              { once: true },
            )
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center animate-scaleIn">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-orange-100 p-6 rounded-lg animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Innovative Solutions</h3>
            <p className="text-orange-900">We create cutting-edge solutions tailored to your business needs.</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Expert Consulting</h3>
            <p className="text-orange-900">Our team of experts provides guidance to help your business thrive.</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg animate-on-scroll opacity-0 md:col-span-2">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Continuous Support</h3>
            <p className="text-orange-900">We offer ongoing support to ensure your success at every step.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

