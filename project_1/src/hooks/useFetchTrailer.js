import { useEffect } from 'react';
import { OPTIONS } from '../utils/constants';
import { addTrailer } from '../utils/trailerSlice';
import { useDispatch } from 'react-redux';
const useFetchTrailer = ()=>{

    const dispatch = useDispatch()

    const fetchTrailer =async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/1022789/videos?language=en-US', OPTIONS);
      const json = await data.json();
      const videos= json.results;
      // console.log(json)
      const filteredVideos = videos.filter((video)=> video.type === "Trailer")
      const trailer = filteredVideos.length ? filteredVideos[0]: videos[0] ;
      // console.log(trailer)
      //store in redux
      dispatch(addTrailer(trailer));
      
    }
    useEffect (()=>{
      fetchTrailer()
    },[])
}

export default useFetchTrailer