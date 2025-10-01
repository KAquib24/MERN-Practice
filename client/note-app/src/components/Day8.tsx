// import { useEffect, useRef, useState } from 'react'

// // 7️⃣ Challenges (3 Levels)
// // Easy ★ — Focus Input
// // One input field + button.
// // Clicking button focuses the input.
// // Tailwind styling for input + button.

// // Medium ★★ — Timer with Start/Stop
// // Counter that increments every second.
// // Start/Stop buttons
// // Use useRef to store setInterval ID.

// // Hard ★★★ — Scrollable List + Scroll to Item
// // Scrollable list of 100 items.
// // Input box: enter item number → scroll to that item smoothly.
// // Use useRef to store container and items dynamically.
// // Tailwind: highlight scrolled-to item with a background.

// const Day8 = () => {
//   const myRef = useRef<HTMLInputElement>(null); // ✅ use HTMLInputElement
//   const [count, setCount] = useState<number>(0)

//   const handleClick = () => {
//     console.log(myRef.current); // DOM node
//     myRef.current?.focus();     // focus works on input
//   };
//   const timer = () => {
    
//     useEffect(() => {
//     const count = useInterval(() => {
//       setCount
//     })
    
//       return () => {
//         second
//       }
//     }, [1000])
    
//   }

//   return (
//     <div>
//       <input ref={myRef} placeholder="Focus me" className="border p-2 rounded" />
//       <button
//         onClick={handleClick}
//         className="ml-2 px-3 py-2 bg-blue-600 text-white rounded"
//       >
//         Focus Input
//       </button>
//     </div>
//   )
// }

// export default Day8
