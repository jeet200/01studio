"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navItems = ["Home", "Services", "About", "Contact"]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/70 backdrop-blur-lg py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              01
            </span>
            <span className="ml-1 text-lg text-white">STUDIOS</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-black font-medium hover:opacity-90 transition-all duration-300">
            Get Started
          </button>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex flex-col">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
                01
              </span>
              <span className="ml-1 text-lg text-white">STUDIOS</span>
            </div>
            <button className="text-white" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl text-gray-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-black font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  )
}
