import React, { useContext } from 'react'
import Router from './Routes/Route'
import { ThemeProvider } from './Context/Context'
import './style.css'
const App = () => {
  const {state} = useContext(ThemeProvider)
  const Darkmode = state.Darkmode
  return (    
  <div className={`${Darkmode?("bg-[#222529]"):("bg-white")} -z-50`}>
         <Router />
  </div>
  )
}
export default App
