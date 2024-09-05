import { MOVIE_URL, OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';


const useFetchMovies = () => {
    const dispatch = useDispatch();

    const movies =async()=> {
      const data = await fetch (MOVIE_URL,OPTIONS)
      const json = await data.json()
      
      //add to redux store
      dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
      movies()
    },[])
}

export default useFetchMovies