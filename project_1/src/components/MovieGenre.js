import React from 'react'
import MovieCard from './MovieCard'

const MovieGenre = ({title, movies}) => {
  return (
    <div className='  w-screen'>
        <h1>{title}</h1>
        <div className=' overflow-x-scroll flex'>
           { movies?.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    </div>
  )
}

export default MovieGenre