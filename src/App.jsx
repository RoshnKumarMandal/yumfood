import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer'
import Header from './Components/Header'
import Ourfood from './Components/Ourfood'

import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Signin from './Components/Signin'
import { useState } from 'react'
import Feedback from './Components/Feedback'

function App() {
  const [count, setCount] =useState(0)
  
  const handleAdd =()=>{
    setCount(count+1)

  }

  return (
    <>
    

      <BrowserRouter >
      <Header count={count} />
      <Routes >
        <Route path='/' element={ <Home handleAdd={handleAdd}/>} />
        <Route path='/aboutus' element={ <AboutUs />} />
        
        <Route path='/ourfood' element={  <Ourfood />}/>
        <Route path='/sigin' element={   < Signin />} />
        <Route path='/Feedback' element={   < Feedback />} />

         </Routes>
         <Footer />
         </BrowserRouter>
         
    </>
  )
}

export default App
