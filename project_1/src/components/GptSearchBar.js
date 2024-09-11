import React, { useRef } from "react";
import language from "../utils/languageConstants";
import {useDispatch, useSelector} from "react-redux"
import { OPTIONS } from "../utils/constants";
import { searchMovie } from "../utils/gptSearchToggleSlice";
import MovieGenre from "./MovieGenre";

const GptSearchBar = () => {
  const inputRef = useRef()
  const langKey = useSelector((store)=> store.changeLanguage.language);
  const dispatch = useDispatch();
 

  const handleSearch = async()=>{
    const input = inputRef.current.value;
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+input+"&include_adult=false&language=en-US&page=1",OPTIONS);
    const json = await data.json();
    const movieSearch = json.results;
    dispatch(searchMovie({movielist:movieSearch},{title:input}));
    
  }

  return (
    <div>
      <form className="mt-[10%] flex justify-center " onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={inputRef}
          className="bg-white text-black w-2/5"
          placeholder={language[langKey].placeholder}
          type="text"
        />
        <button onClick={handleSearch} className="bg-black text-red-600 px-4 py-2 rounded-lg mx-4">
          {language[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
