import React from 'react'
import useClock from '../hooks/useClock'
import "./Clock.css"

export default function MyClock() {
    const [time,ampm] = useClock(); 

  return (
    <div id ="Clock-style">
        {time}
        <span>{ampm}</span>
    </div>
  )
}
