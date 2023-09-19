import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import{BrowserRouter, Routes, Route} from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}
