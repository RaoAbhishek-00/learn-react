import React from 'react'
import MovieDetail from './MovieDetail'
import MovieTrailer from './MovieTrailer'
import { useSelector } from 'react-redux'

const MovieView = () => {
    const movies = useSelector(store => store.movieList.movies)
    if(!movies) return;
    // console.log(movies[0])
    const {title, overview, id} = movies[0];
    

  return (
    <div className='bg-gradient-to-r from-black'>
        <MovieDetail title={title} overview={overview}/>
        <MovieTrailer id={id}/>
    </div>
  )
}

export default MovieView