import React, { useContext } from 'react'
import "./index.css"
import Route from './Routes/Route'
import { ThemeProvider } from './Context/context'
const App = () => {
  const {state,dispatch} = useContext(ThemeProvider)
  const darkmode = state.Darkmode

  return (
    <div className={`${darkmode ?"bg-white": "bg-[rgb(22,22,24)]"}`}>
      <Route/>
     </div>
  )
}
export default App