import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

export const ThemeProvider = createContext()

export const MyContext = ({children})=>{

  const getLocalItems = ()=>{
    const Darkmodes = localStorage.getItem("Darkmod")
    if (Darkmodes) {
        return JSON.parse(localStorage.getItem("Darkmod"));
    }
      else{
      return false
      }
   }

    const initialState = {
      Darkmode:getLocalItems()
    }
    const [state,dispatch] = useReducer(reducer,initialState) 

    useEffect(() => {
      localStorage.setItem("Darkmod",JSON.stringify(state.Darkmode))   
     }, [state.Darkmode]) 
    

    return <ThemeProvider.Provider value={{state,dispatch}}>
           {children}
    </ThemeProvider.Provider>
}