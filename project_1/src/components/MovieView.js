import React from 'react'
import MovieDetail from './MovieDetail'
import MovieTrailer from './MovieTrailer'
import { useSelector } from 'react-redux'

const MovieView = () => {
    const movies = useSelector(store => store.movieList.movies)
    if(!movies) return;
    console.log(movies[0])
  return (
    <div>
        <MovieDetail/>
        <MovieTrailer/>
    </div>
  )
}

export default MovieView