import React from 'react'

const SmallRating = ({rating}) => {
    const starRating = Array.from({length:5},(_,i)=>{
        const number = i + 0.5
        return <span key={i}>
            {rating>=i+1?(<i className="fa-solid fa-star text-yellow-500"></i>):(rating>=number?(<i className="fa-solid fa-star-half-stroke text-yellow-500"></i>):(<i className="fa-solid fa-star"></i>))}
            
        </span>
    })
  return (
    <div>
        <span>{starRating}</span>
    </div>
  )
}

export default SmallRating