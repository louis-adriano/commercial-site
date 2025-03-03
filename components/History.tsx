"use client"

import { useEffect, useRef } from "react"

const timelineEvents = [
  {
    year: 2010,
    title: "Company Founded",
    description: "LOU was established with a vision to revolutionize the tech industry.",
  },
  {
    year: 2013,
    title: "First Major Client",
    description: "Secured our first Fortune 500 client, marking a significant milestone.",
  },
  { year: 2016, title: "International Expansion", description: "Opened our first international office in London, UK." },
  {
    year: 2019,
    title: "AI Division Launch",
    description: "Launched our Artificial Intelligence division to stay at the forefront of innovation.",
  },
  {
    year: 2022,
    title: "Sustainability Initiative",
    description: "Implemented company-wide sustainability practices and green tech solutions.",
  },
]

export default function History() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp", "animate-complete")
            updateTimelineHeight()
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".timeline-item")
    elements.forEach((el) => observerRef.current?.observe(el))

    window.addEventListener("scroll", updateTimelineHeight)
    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener("scroll", updateTimelineHeight)
    }
  }, [])

  const updateTimelineHeight = () => {
    if (timelineRef.current) {
      const scrollPosition = window.scrollY
      const timelineTop = timelineRef.current.offsetTop
      const viewportHeight = window.innerHeight
      const timelineHeight = timelineRef.current.offsetHeight

      let height = scrollPosition - timelineTop + viewportHeight / 2
      height = Math.max(0, Math.min(height, timelineHeight))

      timelineRef.current.style.height = `${height}px`
    }
  }

  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-12 text-center animate-scaleIn">Our History</h2>
        <div className="relative">
          <div
            ref={timelineRef}
            className="absolute left-1/2 w-1 bg-orange-500 transform -translate-x-1/2"
            style={{ height: "0%", transition: "height 0.5s ease-out" }}
          ></div>
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item mb-8 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} opacity-0`}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                <h3 className="text-2xl font-semibold text-orange-700">{event.year}</h3>
                <h4 className="text-xl font-medium text-orange-600 mb-2">{event.title}</h4>
                <p className="text-orange-900">{event.description}</p>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

