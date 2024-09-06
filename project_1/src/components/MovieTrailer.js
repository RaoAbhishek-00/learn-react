import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import useFetchTrailer from "../hooks/useFetchTrailer";

const MovieTrailer = ({ id }) => {
  const trailer = useSelector((store) => store.trailer.movie);
  useFetchTrailer(id);

  return (
    <div className="bg-gradient-to-b from-gray-600   ">
      <iframe
        className="w-screen aspect-video "
        src={"https://www.youtube.com/embed/" + trailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default MovieTrailer;
