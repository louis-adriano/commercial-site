"use client"

import { useEffect, useRef } from "react"

export default function OurServices() {
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
    <section id="our-services" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center animate-scaleIn">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Digital Transformation</h3>
            <p className="text-orange-900 mb-4">
              We help businesses embrace digital technologies to improve their operations and customer experience.
            </p>
            <button className="animated-button bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
              <span>Learn More</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Cloud Solutions</h3>
            <p className="text-orange-900 mb-4">
              Our cloud experts design and implement scalable solutions to enhance your business agility.
            </p>
            <button className="animated-button bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
              <span>Learn More</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Data Analytics</h3>
            <p className="text-orange-900 mb-4">
              We turn your data into actionable insights to drive informed decision-making.
            </p>
            <button className="animated-button bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
              <span>Learn More</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll opacity-0">
            <h3 className="text-2xl font-semibold text-orange-700 mb-4">Cybersecurity</h3>
            <p className="text-orange-900 mb-4">
              Protect your business with our comprehensive cybersecurity solutions and best practices.
            </p>
            <button className="animated-button bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300">
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

