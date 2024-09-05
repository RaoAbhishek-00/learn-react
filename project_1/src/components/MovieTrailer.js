import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import useFetchTrailer from '../hooks/useFetchTrailer';


const MovieTrailer = ({id}) => {
  const trailer = useSelector(store=>store.trailer.movie);
  useFetchTrailer();

  
  return (

    <div className=''>
     
      <iframe  src={"https://www.youtube.com/embed/"+trailer?.key}title="YouTube video player"  ></iframe>
    </div>
  )
}

export default MovieTrailer