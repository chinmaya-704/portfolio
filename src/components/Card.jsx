import React from 'react'

const Card = (props) => {
  return (
   <div className="group w-72 h-60 rounded-xl">
      <div className=" relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
         <div className="absolute inset-0">
            <img src={props.img} className="h-full w-full rounded-xl shadow-xl shadow-white/40 object-cover"/>
         </div>
         <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className=" flex flex-col justify-center items-center p-3 gap-y-3">
               <p className='text-2xl'>{props.title}</p>
               <p className=' text-2xl'>{props.desc}</p>
               <a href={props.link} target="_blank">
                  <button className=" px-3 hover:opacity-80 bg-slate-600 text-white p-2 rounded-xl my-3">Visit</button>
               </a>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Card
