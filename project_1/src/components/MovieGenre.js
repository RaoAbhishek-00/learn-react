import React from 'react'
import MovieCard from './MovieCard'

const MovieGenre = ({title, movies}) => {
  return (
    <div className='bg-black'>
        <div className=' mb-4 -mt-36  w-screen'>
        <h1 className='text-white text-xl'>{title}</h1>
        <div className=' overflow-x-scroll flex'>
           { movies?.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
    </div>
  )
}

export default MovieGenre