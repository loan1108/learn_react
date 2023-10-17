import React from 'react'
import Header from './Header'
import Pagination from './Pagination';
import Products from './Products';
export default function Dashboard() {
  return (
    <div style={{ margin: "50px" }}>
    <Header/>
    <Products/>
    <Pagination/>
    </div>
  )
}
