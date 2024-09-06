import React from 'react'
import useFetchMovies from '../hooks/useFetchMovies'
import MovieView from './MovieView';
import MovieLists from './MovieLists';



const Browse = () => {
useFetchMovies();

  return (
    <div className='w-auto '>
     <MovieView/>
     <MovieLists/>
    </div>
  )
}

export default Browse