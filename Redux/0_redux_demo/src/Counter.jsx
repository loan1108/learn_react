import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import actionTypes from './redux/actionTypes'
export default function Counter() {
    const dispatch = useDispatch();
    const counterReducer = useSelector(state=>state.counterReducer)
  return (
    <div>
        <p>Counter:{counterReducer.initialCounter}</p>
        <button type="button" onClick={()=>dispatch({type:actionTypes.INCREMENT, payload:1})}>Increment +1</button>
        <button type="button" onClick={()=>dispatch({type:actionTypes.DECREMENT, payload:1})}>Decrement -1</button>
    </div>
  )
}
