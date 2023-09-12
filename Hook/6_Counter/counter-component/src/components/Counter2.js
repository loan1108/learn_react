import React from 'react'
import useIncrement from '../hook/useIncrement'

export default function Counter2() {
    const [count,setCount] = useIncrement(2)
  return (
    <div>
        <p>Count:{count}</p>
        <button type="button" onClick={()=>setCount(2)}>Add 2</button>
    </div>
  )
}
