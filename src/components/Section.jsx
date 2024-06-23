import React from 'react'
import Card from './Card'
import items from './Items'

const Section = (props) => {
  return (
    <div className=''>
      <div className=" bg-gradient-to-r from-blue-900 via-slate-500 to-indigo-800 p-5 m-5 text-[#00ff7f] rounded-3xl text-xl niger">
        <p className='my-3'>Frontend: HTML, CSS, Javascript, ReactJS, Tailwind CSS</p>
        <p className='my-3'>Backend: NodeJS, ExpressJS, REST APIs</p>
      </div>

      <div className="p-3 text-cyan-300 text-2xl font-bold play text-center">Some of the projects that I have created so far are listed below:</div>

      <div className=" p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 px-8">
        {items.map((x,i)=>{
          return <Card key={i} id={i} img={x.img} link={x.link} desc={x.desc} title={x.title}/>
        })}
      </div>

    </div>
  )
}

export default Section
