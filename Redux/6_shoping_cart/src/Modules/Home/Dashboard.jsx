import React from 'react'
import Pagination from './Pagination';
import Products from './Products';
import Header from '../../Components/Header';
export default function Dashboard() {
  return (
    <div style={{ margin: "50px" }}>
    <Header/>
    <Products/>
    <Pagination/>
    </div>
  )
}
