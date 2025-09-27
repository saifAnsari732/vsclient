import React from 'react'
import Home from './Componants/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './Componants/Home'
import Dashboard from './Componants/Dashboard'
import VsDigitalLogin from './Componants/Login'
import Upscholar from './Services/Upscholar'
import { Banking } from './Services/Banking'
import Slider from './Componants/Slider'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<VsDigitalLogin/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/Upscholar' element={<Upscholar/>}/>
      <Route path='/Banking' element={<Banking/>} />
      <Route path='/slider' element={<Slider/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App