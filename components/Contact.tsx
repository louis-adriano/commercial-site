"use client"

import { useEffect, useRef } from "react"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scaleIn")
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

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 bg-orange-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center animate-scaleIn">Contact Us</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form ref={formRef} className="opacity-0">
            <div className="mb-4">
              <label htmlFor="name" className="block text-orange-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-orange-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-orange-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="animated-button bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

