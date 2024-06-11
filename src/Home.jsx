import React, { createContext, useEffect, useState } from 'react'
const URL = "https://www.omdbapi.com/?apikey=39cca408"
export const ThemeContext = createContext()
export const Mycontext = ({children})=>{   
        const [isLoading, setIsLoading] = useState(true)
        const [movie, setMovie] = useState([])
        const [error,setError] = useState({show:false,msg:""})
        const [query, setQuery] = useState("dark")
        const fetchData = async(URL)=>{
     setIsLoading(true)
    try{
        const res = await fetch(URL)
        const data = await res.json()
       if (data.Response === "True") {
           setIsLoading(false)
           setMovie(data.Search)
           setError({show:false,msg:""})
           }else{
           setError({show:true,
            msg:data.Error
           })
       }
    }catch(err){
            setError(err)
    }
}
        useEffect(()=>{
            let timerOut = setTimeout(() => {
                fetchData(`${URL}&s=${query}`)
            }, 1000);
            return ()=> clearTimeout(timerOut)
        },[query])
    return <ThemeContext.Provider value={{isLoading,error,movie,query,setQuery}}>
        {children}
    </ThemeContext.Provider>
}

