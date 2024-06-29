import React from 'react'

const Copyright = () => {
  return (
    <div className='mt-5 justify-center items-center px-6 block lg:justify-between lg:flex lg:px-[100px] border-t py-5'>
    
        <p className='text-[#A8A9AB] text-center'>Copyrights ©2024 Eduport. Build by Webestica</p>
        <div className='flex items-center justify-center gap-4 mt-2'>
            <select name="" id="" className='bg-transparent text-[#A8A9AB]'>
                <option value="">🌎 Language</option>
                <option value="">🇬🇧 English</option>
                <option value="">🇩🇪 German</option>
                <option value="">🇫🇷 Frence</option>
            </select>

            <p className='text-[#A8A9AB]'>Terms of use</p>
            <p className='text-[#A8A9AB]'>Privacy policy</p>
        </div>
    </div>
  )
}

export default Copyright