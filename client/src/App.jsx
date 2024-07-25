import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} /> 
        <Route path='/Signup' element={< Signup />} />
        <Route path='/Signin' element={< Signin />} />
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App