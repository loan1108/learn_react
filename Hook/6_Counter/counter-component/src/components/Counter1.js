import React from 'react'
import useIncrement from '../hook/useIncrement'

export default function Counter1() {
    const [count,setCount] = useIncrement(1)
    
  return (
    <div>
        <p>Count:{count}</p>
        <button type="button" onClick={()=>setCount(1)}>Add 1</button>
    </div>
  )
}
