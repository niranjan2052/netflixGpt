import React from "react";
import { IMG_CDN_URL, NO_POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const POSTER_PATH = posterPath ? IMG_CDN_URL + posterPath : NO_POSTER_URL;
  return (
    <div className="flex pr-3">
      <div className="w-48">
        <img src={POSTER_PATH} alt="movie_poster" />
      </div>
    </div>
  );
};

export default MovieCard;
