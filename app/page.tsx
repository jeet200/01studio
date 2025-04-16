"use client"

import { useEffect, useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </div>
      )}
    </main>
  )
}
