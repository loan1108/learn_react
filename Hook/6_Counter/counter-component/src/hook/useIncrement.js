import React, {useState} from 'react'

export default function useIncrement(addAmount) {
    const [count,setCount] = useState(0); 
    function increase(addAmount){
        setCount(count => count + addAmount);
    }
  return [count,increase]
}
