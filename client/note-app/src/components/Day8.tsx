import { useRef } from 'react'

const Day8 = () => {
  const myRef = useRef<HTMLInputElement>(null); // ✅ use HTMLInputElement

  const handleClick = () => {
    console.log(myRef.current); // DOM node
    myRef.current?.focus();     // focus works on input
  };

  return (
    <div>
      <input ref={myRef} placeholder="Focus me" className="border p-2 rounded" />
      <button
        onClick={handleClick}
        className="ml-2 px-3 py-2 bg-blue-600 text-white rounded"
      >
        Focus Input
      </button>
    </div>
  )
}

export default Day8
