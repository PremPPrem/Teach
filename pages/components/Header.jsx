import React from 'react'

export default function Header({name,image}) {
  return (
    <div className=' h-[50vh] relative bg-headImage  bg-center bg-cover bg-no-repeat '>
      <div className='w-full h-full flex items-center justify-center '>
        <h1 className=' text-[4rem] text-white '>{name}</h1>
      </div>
      <img src={image} alt="" className='h-[50vh] absolute top-0 left-0 z-[-1] object-cover  w-full ' />
    </div>
  )
}
