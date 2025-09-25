
import { useState } from 'react'

const Day4 = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div>
      <h1>the count is {count}</h1>
      <button className="px-4 py-2 bg-red-600" onClick={() => setCount(count + 1)}>increase</button>
    </div>
  )
}

export default Day4
