import React, { useContext } from 'react'
import { ThemeContext } from './Home'
const Search = () => {
  const {query,setQuery} = useContext(ThemeContext)
  return (
    <div>
        <input type="search" className='searchBox' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Enter Movie/Series Name'/>
    </div>
  )
}
export default Search