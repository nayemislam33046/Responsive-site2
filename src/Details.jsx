import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Details.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import noposter from './assets/noposter.jpg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
  const Details = () => {
  const URL = "https://www.omdbapi.com/?apikey=39cca408"
  const {id} = useParams()
  const [isLoading,setisLoading] = useState(true)
  const [Error,setError] = useState(null)
  const [details, setDetails] = useState([])
  const fetchDetils = async(URL)=>{
    setisLoading(true)
   try{
    const res = await fetch(URL)
    const data = await res.json()
    setDetails(data)
    setisLoading(false)
    setError(null)
   }catch(err){
     setError(err)
   }
    }
    useEffect(()=>{
      fetchDetils(`${URL}&i=${id}`)
      },[id])

   const {Title,Type,Released,Genre,Writer,Year,imdbVotes,imdbRating,Poster,Director,Country,Actors,Award,DVD,Language,Plot,Runtime} = details
  return (
    <div className='Parentss'>
     <div>
     <img src={Poster==="N/A"?noposter:Poster} alt={Title} className='posterBack'/>
     </div>


       {
         isLoading ? (
          <div className='allSkeletonParent'>
            <div className='parentSkeleton'>
            <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
          <div>
          <Skeleton height={30} width={60} baseColor='gray' className='typeMovie'/>
          <Skeleton height={400} width={400} baseColor='gray'/>
          </div>
          <Skeleton height={40} width={400} baseColor='gray' className='headerSkeleton'/>
          <Skeleton height={40} width={400} baseColor='gray' className='headerSkeleton'/>
          <Skeleton height={40} width={400} baseColor='gray' className='headerSkeleton'/>
           </div>


           <div className='parentSkeletonTwo'>
           <Skeleton height={70} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>
           <Skeleton height={30} width={400} baseColor='gray' className='headerSkeleton'/>

           <Skeleton circle={true} height={200} width={200} baseColor='gray' className='headerSkeleton'/>

           </div>

          </div>
          
        ):(
          <div className='desc'>
          <div>
          <h1 className='TitleDesc'>{Title} ({Year})</h1>
          <span className='typeDesc'>{Type}</span><br />
          <img src={Poster==="N/A"?noposter:Poster} alt={Title} className='imgDesc '/>
           <p className='genres'><span className='categoryTitle'>Genres :</span> {Genre}</p>
           <p className='genres'><span className='categoryTitle'>Relesed Date : </span>{Released}</p>
           <p className='genres'><span className='categoryTitle'>Run Time : </span> {Runtime}</p>
  
  
          </div>
            <div className='Desctwo'>
            <p className='paraDesc'><span className='description'>Description :</span> {Plot}</p>
            <p className='paraDesc'><span className='description'>Writer : </span>{Writer}</p>
            <p className='paraDesc'><span className='description'>Directed By : </span>{Director==="N/A" ? "Unknown Director Name":Director}</p>
            <p className='paraDesc'><span className='description'>Cast : </span>{Actors}</p>
            <p className='paraDesc'><span className='description'>Released Country : </span>{Country}</p>
            <p className='paraDesc'><span className='description'>Language : </span>{Language}</p>
            <p className='paraDesc'><span className='description'>DVD Relesed : </span>{DVD ? DVD : "DVD NO RELEASED"}</p>
            <p className='paraDesc'><span className='description'>Award Achieve : </span>{Award ? Award:"No Award Achieve"}</p>
            <p className='paraDesc'><span className='description'>IMDB Votes : </span>{imdbVotes}</p>
  
                
                <div style={{width:"150px"}} className='ratingClass'>
                   <CircularProgressbar
                    value={imdbRating} 
                   strokeWidth={10} 
                   maxValue={10}
                    styles={buildStyles({textColor:"yellow",pathColor:imdbRating>7 ? "green":(imdbRating>=5?"orange":"red")})} 
                    text={`${imdbRating}`}
                     />;
                </div>

            </div>
        </div>
        )
       }


     
    </div>
  )
}

export default Details
