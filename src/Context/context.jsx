import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

export const ThemeProvider = createContext()

export const MyContext = ({children})=>{
   const getLocalItems = ()=>{
    const Darkmodes = localStorage.getItem("Darkmode")
    console.log(Darkmodes)
    if (Darkmodes) {
        return JSON.parse(localStorage.getItem("Darkmode"));
    }
   }

    const initilState = {
    Darkmode:getLocalItems()
   }


   
   const [state, dispatch] = useReducer(reducer,initilState)
  
   useEffect(() => {
    localStorage.setItem("Darkmode",JSON.stringify(state.Darkmode))   
   }, [state.Darkmode])
   
return <ThemeProvider.Provider value={{state,dispatch}}>
        {children}
    </ThemeProvider.Provider>
}

