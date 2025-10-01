import { useEffect, useRef, useState } from 'react'

// 7️⃣ Challenges (3 Levels)
// Easy ★ — Focus Input
// One input field + button.
// Clicking button focuses the input.
// Tailwind styling for input + button.

// Medium ★★ — Timer with Start/Stop
// Counter that increments every second.
// Start/Stop buttons
// Use useRef to store setInterval ID.

// Hard ★★★ — Scrollable List + Scroll to Item
// Scrollable list of 100 items.
// Input box: enter item number → scroll to that item smoothly.
// Use useRef to store container and items dynamically.
// Tailwind: highlight scrolled-to item with a background.

const Challenge8 = () => {
  // ✅ Easy Challenge (Focus Input)
  const myRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    myRef.current?.focus()
  }

  // ✅ Medium Challenge (Timer with Start/Stop)
  const [count, setCount] = useState<number>(0)
  const intervalRef = useRef<number | null>(null) // ✅ FIXED

  const startTimer = () => {
    if (intervalRef.current !== null) return // prevent multiple intervals
    intervalRef.current = window.setInterval(() => {
      setCount((prev) => prev + 1)
    }, 1000)
  }

  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return () => stopTimer() // cleanup when component unmounts
  }, [])

  // ✅ Hard Challenge (Scrollable List + Scroll to Item)
  const listContainerRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]) // ✅ FIXED

  const [targetIndex, setTargetIndex] = useState<number>(0)
  const [highlighted, setHighlighted] = useState<number | null>(null)

  const scrollToItem = () => {
    const index = targetIndex - 1
    if (index >= 0 && index < itemRefs.current.length) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      setHighlighted(index)
    }
  }

  return (
    <div className="p-4 space-y-6">
      {/* Easy ★ */}
      <div>
        <input
          ref={myRef}
          placeholder="Focus me"
          className="border p-2 rounded"
        />
        <button
          onClick={handleClick}
          className="ml-2 px-3 py-2 bg-blue-600 text-white rounded"
        >
          Focus Input
        </button>
      </div>

      {/* Medium ★★ */}
      <div className="space-y-2">
        <p className="text-lg font-semibold">Count: {count}</p>
        <div className="space-x-2">
          <button
            onClick={startTimer}
            className="px-3 py-2 bg-green-600 text-white rounded"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="px-3 py-2 bg-red-600 text-white rounded"
          >
            Stop
          </button>
        </div>
      </div>

      {/* Hard ★★★ */}
      <div className="p-4 space-y-4">
        <div>
          <input
            type="number"
            value={targetIndex}
            onChange={(e) => setTargetIndex(Number(e.target.value))}
            placeholder="Enter item number"
            className="border p-2 rounded"
          />
          <button
            onClick={scrollToItem}
            className="ml-2 px-3 py-2 bg-blue-600 text-white rounded"
          >
            Scroll
          </button>
        </div>

        {/* Scrollable list */}
        <div
          ref={listContainerRef}
          className="h-64 overflow-y-auto border rounded p-2"
        >
          {Array.from({ length: 100 }, (_, i) => (
            <div
              key={i}
              ref={(el) => {
                itemRefs.current[i] = el
              }} // ✅ FIXED
              className={`p-2 border-b ${
                highlighted === i ? "bg-yellow-200" : ""
              }`}
            >
              Item {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Challenge8