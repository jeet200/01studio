"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Message sent successfully!")
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 shrink-0">
                  <Mail className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">01studios.in@gmail.com</p>
                  
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 shrink-0">
                  <Phone className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-gray-300">+91 9726128299</p>
                  <p className="text-gray-300">+91 8320503285</p>
                  
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-gray-300">
                    Ring Road
                    <br />
                    Bhavnagar,Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-20" />

              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-sm text-gray-400">Weekdays</h4>
                    <p className="text-gray-300">9:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-gray-400">Weekend</h4>
                    <p className="text-gray-300">Closed</p>
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-6 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Twitter", "Instagram", "LinkedIn", "Dribbble"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                      <span className="text-sm">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-black font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h3>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-black font-medium hover:opacity-90 transition-all duration-300">
            Get Started Now
          </button>
          <p className="mt-6 text-gray-400">Let's transform your ideas into reality</p>
        </div>

        <div className="mt-24 pt-12 border-t border-white/10 text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              01
            </span>
            <span className="ml-1 text-lg text-white">STUDIOS</span>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} 01Studios. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
