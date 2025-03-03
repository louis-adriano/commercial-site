"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import MobileMenu from "./MobileMenu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-orange-500 bg-opacity-90 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            LOU
          </Link>
          <div className="hidden md:flex items-center justify-center flex-1">
            <Link href="#home" className="text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2">
              Home
            </Link>
            <Link
              href="#what-we-do"
              className="text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2"
            >
              What We Do
            </Link>
            <Link
              href="#our-services"
              className="text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2"
            >
              Our Services
            </Link>
            <Link href="#contact" className="text-white hover:text-orange-200 transition-colors duration-300 px-3 py-2">
              Contact
            </Link>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  )
}

