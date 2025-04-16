"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-8">
          <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500">
            01
          </div>
          <div
            className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-xl text-gray-300">STUDIOS</div>
        <div className="mt-8 w-[200px] h-1 bg-gray-800 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-sm text-gray-400">ENTERING THE FUTURE {progress}%</div>
      </div>
    </div>
  )
}
