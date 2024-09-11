import React from 'react'
import GptSearchBar from './GptSearchBar'
import MovieGenre from './MovieGenre'
import { useSelector } from 'react-redux';

const GptSearchPage = () => {
  const searchedMovies = useSelector((store)=>store.gptSearchToggle);
  return (
    <div className='absolute bg-gradient-to-b from-black w-screen min-h-screen'>
        <GptSearchBar />
        <div className='my-4'>
        <MovieGenre title={searchedMovies.searchedTitle} movies ={searchedMovies.searchedMovies} />
        </div>
    </div>
  )
}

export default GptSearchPage