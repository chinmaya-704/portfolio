import React from 'react'
import { ReactTyped } from 'react-typed'

const Main = () => {
  const phrase=["Frontend Developer","Backend Developer"]

  return (
    <div className='flex flex-col sm:flex-row gap-4 p-5 my-5'>
      <div className="mx-auto rounded-full object-contain w-1/2 sm:w-[20%] flex justify-center items-center drop-shadow-xl shadow-[#00efff]">
        <img className=' w-full h-auto rounded-full object-cover ' src="dp.jpg" alt="" />
      </div>

      <div className="w-[100%] sm:w-[60%]  p-2 px-5">
         <p className='colour my-4 text-7xl '>HI, Myself</p> 

         <p className=' colour text-7xl font-bold'>Chinmaya Kumar Sahoo</p>

         <p className='font-bold tcolour text-6xl my-8 w-full'>I'm a {""}
          <ReactTyped
            strings={phrase}
            typeSpeed={200}
            loop
            backSpeed={20}
            cursorChar='|'
            showCursor={true}
          />  
        </p>
      </div>
    </div>
  )
}

export default Main
