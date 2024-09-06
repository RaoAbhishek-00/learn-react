import React from 'react'
import MovieGenre from './MovieGenre'
import { useSelector } from 'react-redux'

const MovieLists = () => {
  const movies = useSelector((store) => store.movieList)
  // console.log(movies)
  return (
    <div>
      <MovieGenre title={"Now Playing"} movies={movies.movies} />

    </div>
  )
}

export default MovieLists