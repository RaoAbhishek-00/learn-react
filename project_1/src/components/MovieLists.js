import React from 'react'
import MovieGenre from './MovieGenre'
import { useSelector } from 'react-redux'

const MovieLists = () => {
  const movies = useSelector((store) => store.movieList)
  // console.log(movies)
  return (
    <div className='bg-black -mt-36'>
      <MovieGenre title={"Now Playing"} movies={movies.movies} />
      <MovieGenre title={"Popular"} movies={movies.movies} />
      <MovieGenre title={"Trending"} movies={movies.movies} />


    </div>
  )
}

export default MovieLists