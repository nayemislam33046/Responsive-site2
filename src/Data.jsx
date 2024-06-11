import React, { useContext } from 'react'
import { ThemeContext } from './Home'
import MovieCard from './MovieCard'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Data = () => {
    const {movie,isLoading,error}= useContext(ThemeContext)
  return (
    <div className='movieCart'>
     
     {isLoading ? (
          
       <div>
         <div className='skeld'>

         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>
         <div className ='skelBar'>
          <div className='skelBr'>
          <Skeleton baseColor='gray' inline={true} width={195} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          <Skeleton baseColor='gray' inline={true} width={45} height={30} className='skel' enableAnimation={true} highlightColor='dodgerblue' />
          </div>
         <Skeleton baseColor='gray' inline={true} width={250} height={350} className='skel' enableAnimation={true} borderRadius={10} highlightColor='dodgerblue' />
         </div>

      
        </div>
       </div>
        
     ):(
      movie?.map((movs,i)=>{
        return <div key={i}>
          <MovieCard {...movs}/>
        </div>
      })
     )}
     
  
    </div>
  )
}

export default Data


//  !