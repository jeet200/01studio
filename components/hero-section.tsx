export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 opacity-30 bg-gradient-to-b from-purple-500/10 via-black to-black" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Crafting</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
                Digital Futures
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-lg">
              We transform ideas into immersive digital experiences through cutting-edge design, technology, and
              innovation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-black font-medium flex items-center gap-2 hover:opacity-90 transition-all duration-300">
                Explore Services
              </button>
              <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300">
                Our Work
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 blur-3xl opacity-30" />
              </div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-black">01</span>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Future-Forward Digital Solutions</h3>
                <p className="text-center text-gray-300 mb-8">
                  Web & App Design • Branding • AI Assistants
                  <br />
                  Video Production • AR/VR • CGI
                </p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {["Web Design", "Branding", "AI", "Video", "AR/VR", "CGI"].map((item) => (
                    <div
                      key={item}
                      className="bg-white/10 rounded-lg p-2 text-center text-sm hover:bg-white/20 transition-all cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-400 text-sm mb-2">Scroll Down</div>
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
      </div>
    </section>
  )
}
