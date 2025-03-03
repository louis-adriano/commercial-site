import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import WhatWeDo from "@/components/WhatWeDo"
import OurServices from "@/components/OurServices"
import History from "@/components/History"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <OurServices />
      <History />
      <Contact />
    </main>
  )
}

