import React from 'react'
import MovieCard from './MovieCard'

const MovieGenre = ({title, movies}) => {
  return (
    <div className=''>
        <div className=' mb-4    w-screen'>
        <h1 className='text-white text-xl'>{title}</h1>
        <div className=' overflow-x-scroll flex ' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           { movies?.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
    </div>
  )
}

export default MovieGenre