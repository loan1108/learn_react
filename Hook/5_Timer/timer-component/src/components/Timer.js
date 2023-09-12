import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    let timer = setInterval(() => {
      console.log(count)
      setCount((count) => count - 1);
    }, 1000);
    return ()=>{
      clearInterval(timer)
      if(count ===0){
       
        alert("Time's up") 
      }
    }
  },[count]);
  return <div>Count down from {count}</div>;
}
