import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex pr-3">
      <div className="w-48">
        <img src={IMG_CDN_URL + posterPath} alt="movie_poster" />
      </div>
    </div>
  );
};

export default MovieCard;
