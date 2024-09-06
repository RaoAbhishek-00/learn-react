import React from 'react'

const MovieDetail = ({title,overview}) => {
  return (
    <div className='mt-36  absolute   '>
      <h1 className=' font-bold text-5xl ml-4 text-red-300 '>{title}</h1>
      <p className='text-base w-1/2 mt-5 ml-4 text-white'>{overview}</p>
      <div className='mt-4 ml-4 '>
        <button className='w-36 p-2 px-4 bg-gray-500 text-white rounded-lg cursor-pointer '>play</button>
        <button className='w-36 p-2 px-4 bg-gray-500 text-white mx-2 rounded-lg cursor-pointer'>more info</button>
      </div>
    </div>
  )
}

export default MovieDetail