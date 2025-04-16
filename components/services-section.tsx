"use client"

import { useState } from "react"
import { Monitor, Palette, Bot, Video, Headset } from "lucide-react"

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      title: "Web & App Design",
      icon: <Monitor className="w-10 h-10" />,
      description:
        "Cutting-edge web and mobile applications with intuitive UX/UI design, responsive layouts, and seamless functionality across all devices.",
      features: ["Responsive Web Design", "Mobile App Development", "E-commerce Solutions", "Progressive Web Apps"],
    },
    {
      title: "Branding",
      icon: <Palette className="w-10 h-10" />,
      description:
        "Comprehensive branding solutions that communicate your unique identity through strategic design, storytelling, and visual consistency.",
      features: ["Logo Design", "Brand Identity", "Style Guides", "Marketing Materials"],
    },
    {
      title: "AI Assistants",
      icon: <Bot className="w-10 h-10" />,
      description:
        "Custom AI solutions that enhance user experience, automate processes, and provide intelligent insights for your business.",
      features: ["Chatbots", "Virtual Assistants", "AI Integration", "Natural Language Processing"],
    },
    {
      title: "Video Production",
      icon: <Video className="w-10 h-10" />,
      description:
        "High-quality video content that tells your story, from concept to final delivery, with professional cinematography and editing.",
      features: ["Commercial Videos", "Motion Graphics", "Animation", "Post-Production"],
    },
    {
      title: "AR/VR & CGI",
      icon: <Headset className="w-10 h-10" />,
      description:
        "Immersive experiences that blend reality with digital elements, creating engaging and interactive content for your audience.",
      features: ["Augmented Reality", "Virtual Reality", "3D Modeling", "Interactive Experiences"],
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into digital reality with our comprehensive suite of creative and technical services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-[500px] overflow-hidden relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-8 flex items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                  {services[activeService].icon}
                </div>
                <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
              </div>

              <p className="text-gray-300 mb-8 text-lg">{services[activeService].description}</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <div key={feature} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-black font-medium hover:opacity-90 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/20"
                      : "bg-black/40 border border-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        activeService === index ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-white/10"
                      }`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 mr-2" />
                  <span>Cutting-edge technology and design principles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 mr-2" />
                  <span>Dedicated team of creative professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 mr-2" />
                  <span>Tailored solutions for your specific needs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 mr-2" />
                  <span>Seamless integration of multiple services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
