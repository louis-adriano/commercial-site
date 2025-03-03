"use client"

import { useState } from "react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Toggle menu">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-orange-500 bg-opacity-90 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#what-we-do"
              className="block text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2"
              onClick={toggleMenu}
            >
              What We Do
            </Link>
            <Link
              href="#our-services"
              className="block text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2"
              onClick={toggleMenu}
            >
              Our Services
            </Link>
            <Link
              href="#contact"
              className="block text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

