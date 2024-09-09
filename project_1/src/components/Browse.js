import React from "react";
import useFetchMovies from "../hooks/useFetchMovies";
import MovieView from "./MovieView";
import MovieLists from "./MovieLists";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useFetchMovies();
  const gptSearchView = useSelector(
    (store) => store.gptSearchToggle.gptSearchView
  );
  

  return (
    <div className="w-auto  ">
      {gptSearchView ? (
        <GptSearchPage />
      ) : (
        <>
          {" "}
          <MovieView />
          <MovieLists />
        </>
      )}
    </div>
  );
};

export default Browse;
