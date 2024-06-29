import  { useContext, useState } from 'react'
import { ThemeProvider } from '../../Context/Context'
import videos from "../../video/video.mp4"
const Homepage = () => {

  const [iframeYT, setIframeYT] = useState(false)
    const {state} = useContext(ThemeProvider)
  const Darkmode = state.Darkmode


  const handleMediaPlay = ()=>{
     setIframeYT(!iframeYT)
  }
  const handleCross =  ()=>{
    setIframeYT(false)
  }
  return (
    <div className='lg:flex gap-5 px-4 xl:px-[100px] pt-10' id='Homes'>
        <span className={`${Darkmode?("text-[#7A4820]"):("text-[#FECBA0]")} text-3xl absolute left-16 lg:left-6`}><i className="fa-solid fa-circle"></i></span>
        
        
        <div className='flex flex-col justify-center items-center'>
            <p className=' mt-2'><svg width="22px" height="21px">
						<path className='fill-[#29C495]' d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path>
					</svg></p>

          <span className='absolute -bottom-3 left-[38rem] hidden xl:block'>
          <svg width="42px" height="42px">
						<path className='fill-[#F7C32E]' d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z"></path>
					</svg>
          </span>

                    <p className={`${Darkmode?("text-white"):("text-black")} z-10 sm:text-5xl text-4xl text-center font-bold mt-5`}>Limitless learning at your fingertips</p>
                    <p className={`text-[#747579] z-10 text-xl text-center mt-5`}>Online learning and teaching marketplace with 5K+ courses & 10M students. Taught by experts to help you acquire new skills.</p>
                    <div className='text-[#747579] flex flex-wrap justify-center mt-10'>
                        <p className='mx-1'><i className={`fa-solid fa-check border border-white ${Darkmode ? ("text-white"):("text-black")} rounded-full p-[2px]`}></i> Learn with experts</p>
                        <p className='mx-1'><i className={`fa-solid fa-check border border-white ${Darkmode ? ("text-white"):("text-black")} rounded-full p-[2px]`}></i> Get certificate</p>
                        <p className='mx-1'><i className={`fa-solid fa-check border border-white ${Darkmode ? ("text-white"):("text-black")} rounded-full p-[2px]`}></i> Get membership</p>
                    </div>

                    <div className='sm:flex gap-5 items-center '>
                    <button className={`${Darkmode ? ("bg-[#35252B]"):("bg-[#FBE9EB]")}  hover:text-white transition-all rounded-lg px-5 py-2 mt-7 text-lg font-semibold text-red-800 hover:bg-red-600`}>Get Started</button> 
                    <div className='flex items-center gap-3' onClick={handleMediaPlay}>
                    <div className='bg-[#164069] p-2 rounded-full mt-5 w-16 h-16 flex justify-center items-center hover:scale-105' >
                     <button className='text-white bg-[#066AC9] w-full h-full rounded-full text-2xl'><i className={`ms-1 ${iframeYT ?  ("fa-solid fa-xmark"):("fa-solid fa-play")} `}></i> </button>          
                     </div>
                     <p className={`${Darkmode ?("text-white"):("text-black")} mt-5`}>{iframeYT ?  ("Close Video"):("Watch Video")}</p>
                    </div>
                    </div>
        </div>

                <div>
                
                  <div className={`mt-24 z-40 absolute top-0 left-0 bottom-0 right-0 transition-all ${iframeYT ?  ("block"):("hidden")}`}>

                <video src={videos} className='w-full h-1/2 sm:h-full bg-black' controls rel='0' >
                         
                 </video>
                  </div>
                 <span className={`absolute text-2xl z-50 text-white right-10 xl:text-start top-24 sm:top-28`} onClick={handleCross}><i className={`fa-solid fa-xmark ${iframeYT ?  ("block"):("hidden")}`}></i></span>
                

                </div>

        <div className='mt-16 py-10 w-full'>
                    <div className='relative flex justify-center items-center scale-90'>
                    <svg className="pt-5 pt-sm-0 scale-110 xl:scale-125" width="500px" height="538px" viewBox="0 0 554 544">
          <path className="fill-[#1D3B53]" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path>
		</svg>
                              <div className='absolute -top-5 lg:-top-20 scale-100 sm:scale-110'>
                              <img src="https://eduport.webestica.com/assets/images/element/07.png" alt="Boy" className='lg:scale-95'/>
                                <span className="text-orange-500 absolute top-24 left-24 text-5xl "><i className="fa-regular fa-lightbulb"></i></span>
                              </div>

                              <div className='absolute top-0 right-14'>
                               <div className='relative'>
                                 <img src="data:image/png;base64,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" alt="" className={`${Darkmode ? (""):("border-2")} w-14 rounded-xl`}/>
                               </div>
                              </div>

                                <div className=''>
                                <span className='absolute bg-white p-3 rounded-xl border-2 top-36 -left-20 sm:-left-10 lg:-left-24 xl:left-0 hidden md:block'><img src="https://eduport.webestica.com/assets/images/client/science.svg" alt="reactjs" /></span>
                                </div>

                               <div className='absolute top-32 right-0 hidden md:block'>
                               <div className='bg-[#48C37A] h-32 rounded-xl p-3'>
                                      <p className=' text-white text-lg text-center py-2'>Our daily new students</p>
                                      <div className='flex items-center justify-center text-center'>
                                        <span ><img src="https://eduport.webestica.com/assets/images/avatar/01.jpg" alt="1" className='rounded-full w-12 border-2 border-white absolute left-3'/></span>
                                        <span ><img src="https://eduport.webestica.com/assets/images/avatar/02.jpg" alt="2" className='rounded-full w-12 border-2 border-white absolute left-10'/></span>
                                        <span ><img src="https://eduport.webestica.com/assets/images/avatar/03.jpg" alt="3" className='rounded-full w-12 border-2 border-white absolute left-[70px]'/></span>
                                        <span ><img src="https://eduport.webestica.com/assets/images/avatar/04.jpg" alt="4" className='rounded-full w-12 border-2 border-white absolute left-[100px]'/></span>
                                        <span className='rounded-full w-12 h-12 bg-blue-700 border-2 border-white absolute left-32 top-[56px] flex items-center justify-center text-white text-lg'>1k+</span>
                                      </div>
                                </div>
                               </div>

                               <span><img src="https://eduport.webestica.com/assets/images/client/figma.svg" alt="" className='absolute bg-white p-2 rounded-xl scale-110 bottom-36 hidden lg:block'/></span>

                               <div className='hidden sm:block'>
                               <div className='absolute flex justify-between shadow-xl backdrop-blur-sm gap-3 left-0 -bottom-10 items-center border border-black rounded-xl p-5'>
                                 <span className='text-white px-5 bg-[#F7C32E] py-4 rounded-full blur-none text-2xl'><i className="fa-solid fa-envelope"></i></span>
                                 <div>
                                  <p className={`font-bold text-lg ${Darkmode ? ("text-white"):("text-slate-800")} flex gap-8`}>Congratulations <span className='text-green-600'><i className="fa-solid fa-circle-check"></i></span></p>
                                  <p className={`${Darkmode ? ("text-white"):("text-black")}`}>Your admission completed</p>
                                 </div>
                               </div>
                               </div>
                    </div>
        </div>
    </div>
  )
}

export default Homepage