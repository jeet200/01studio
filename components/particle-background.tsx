"use client"

import { useEffect, useRef } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let particlesArray: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
      radius: 150,
    }

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x
      mouse.y = event.y
    })

    const colors = ["#8b5cf6", "#06b6d4", "#ec4899"]

    function init() {
      particlesArray = []
      const numberOfParticles = (canvas.width * canvas.height) / 15000
      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 1.5 + 0.5
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const speedX = Math.random() * 0.5 - 0.25
        const speedY = Math.random() * 0.5 - 0.25
        const color = colors[Math.floor(Math.random() * colors.length)]

        particlesArray.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
        })
      }
    }

    function connect() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = 1 - distance / 120
            ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.1})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX
        particlesArray[i].y += particlesArray[i].speedY

        if (particlesArray[i].x > canvas.width || particlesArray[i].x < 0) {
          particlesArray[i].speedX = -particlesArray[i].speedX
        }
        if (particlesArray[i].y > canvas.height || particlesArray[i].y < 0) {
          particlesArray[i].speedY = -particlesArray[i].speedY
        }

        // Mouse interaction
        if (
          mouse.x !== undefined &&
          mouse.y !== undefined &&
          Math.sqrt((particlesArray[i].x - mouse.x) ** 2 + (particlesArray[i].y - mouse.y) ** 2) < mouse.radius
        ) {
          const angle = Math.atan2(particlesArray[i].y - mouse.y, particlesArray[i].x - mouse.x)
          particlesArray[i].x += Math.cos(angle) * 1
          particlesArray[i].y += Math.sin(angle) * 1
        }

        // Draw particles
        ctx.fillStyle = particlesArray[i].color
        ctx.beginPath()
        ctx.arc(particlesArray[i].x, particlesArray[i].y, particlesArray[i].size, 0, Math.PI * 2)
        ctx.fill()
      }
      connect()
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", (event) => {
        mouse.x = event.x
        mouse.y = event.y
      })
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" style={{ mixBlendMode: "screen" }} />
}
