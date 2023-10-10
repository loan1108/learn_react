import React, {useEffect} from 'react'
import Products from './Products'
import YourCart from './YourCart'
import 'bootstrap/dist/css/bootstrap.css'
export default function Shoping() {
  return (
    <>
    <h1>Shopping Cart</h1>
    <hr/>
    <Products/>
    <hr/>
    <YourCart/>
    </>
  )
}
