import React from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import MovieView from './MovieView';
import MovieLists from './MovieLists';



const Browse = () => {
useFetchMovies();

  return (
    <div className='absolute'>
     <MovieView/>
     <MovieLists/>
    </div>
  )
}

export default Browse