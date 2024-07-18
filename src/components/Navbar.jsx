import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-3 bg-gradient-to-r from-slate-950 via-blue-400 to-indigo-800'>
      <div className=" mx-5 text-xl md:text-3xl  text-transparent from-orange-400 via-pink-600 to-yellow-300 bg-gradient-to-r bg-clip-text font-bold">C.K.&@hoo</div>
      <div className=" flex gap-4 items-center">
         <a href="https://github.com/chinmaya-704" target='_blank'>
            <img className='hover:opacity-70 size-7 md:size-10' src="github.png" alt="git" />
         </a>
         <a target='_blank' href="https://www.linkedin.com/in/chinmaya-sahoo-b47385254">
            <img className=' size-7 md:size-10 hover:opacity-70' src="linkedin.png" alt="linkedin" />
         </a>
         <a href="Chinmaya Kumar Sahoo.pdf" download={"Chinmaya Kumar Sahoo"}>
            <button className=' bg-black p-1 md:p-2 text-xs md:text-xl rounded-full font-bold text-indigo-800/95 hover:opacity-70'>Resume</button>
         </a>
      </div>
    </nav>
  )
}

export default Navbar
