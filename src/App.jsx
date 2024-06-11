import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Data from './Data'
import Details from './Details'
import Search from './Search'
import Navbars from './Navbars'

const App = () => {
  return (
    <BrowserRouter>
        <Navbars/>
         <Routes>
            <Route path='/' element={<Data/>}/>
            <Route path='/:id' element={<Details/>}/>
         </Routes>
    </BrowserRouter>
  )
}

export default App