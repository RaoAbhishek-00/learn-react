import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
    console.log(movie)
    const {title,poster_path} = movie;
  return (
    <div className=''>
        <img className='w-40 h-56 max-w-none ' src={POSTER_URL+poster_path} alt="poster" />
    </div>
  )
}

export default MovieCard