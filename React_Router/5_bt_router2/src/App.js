import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Employees from './components/Employees'
import EmployeeDetail from './components/EmployeeDetail'
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/employees" element={<Employees/>}/>
          <Route path="/employees/:id/:name/:age" element={<EmployeeDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}
