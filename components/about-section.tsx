import { Users, Lightbulb, Zap, Globe } from "lucide-react"

export default function AboutSection() {
  const stats = [
    { value: "1", label: "Year Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
    { value: "0", label: "Awards Won" },
  ]

  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in digital design and technology.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision is realized in every project.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for perfection in every detail, from concept to final delivery.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Impact",
      description: "We create digital experiences that make a lasting impression on audiences worldwide.",
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
              01Studios
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are a team of creative technologists passionate about crafting digital experiences that push boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-300 mb-6">
              Founded with a vision to bridge the gap between technology and creativity, 01Studios has evolved into a
              leading digital agency specializing in cutting-edge solutions across multiple disciplines.
            </p>
            <p className="text-gray-300 mb-6">
              Our journey began with a simple belief: that technology should enhance human experiences, not complicate
              them. This philosophy guides everything we do, from web design to immersive AR/VR experiences.
            </p>
            <p className="text-gray-300">
              Today, we're proud to work with forward-thinking clients who share our passion for innovation and
              excellence. Together, we're shaping the future of digital interaction.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 blur-3xl opacity-20" />
                </div>
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-black">01</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Our Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all h-full flex flex-col"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-2">
                          {value.icon}
                        </div>
                        <h4 className="font-bold">{value.title}</h4>
                      </div>
                      <p className="text-sm text-gray-300 flex-grow">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all">
                <h4 className="font-bold text-xl mb-4">Design</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>UI/UX Design</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Brand Identity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Motion Graphics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>3D Modeling</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all">
                <h4 className="font-bold text-xl mb-4">Development</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Frontend Development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Backend Systems</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Mobile Applications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>AR/VR Experiences</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all">
                <h4 className="font-bold text-xl mb-4">Technology</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>AI Integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Blockchain Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>IoT Applications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-2" />
                    <span>Cloud Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
