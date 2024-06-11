import React from 'react'
import { NavLink } from 'react-router-dom'
import noposter from '../public/noposter.jpg'

const MovieCard = ({imdbID,Title,Type,Year,Poster}) => {
    const title = Title.substring(0,15)
   
  return (
   <div>
    
     <NavLink to={`${imdbID}`} className="navLinks">
       <h3 className='headingTitle'>{title.length>=15?`${title}...`:Title} ({Year})</h3>
       <img src={Poster==="N/A" ? noposter:Poster} alt={Title} className='poster'/>
        <span className='types'>{Type}</span>
     </NavLink>
     
   </div>
  )
}

export default MovieCard