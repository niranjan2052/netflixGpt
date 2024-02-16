import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieSearchResults } = useSelector((store) => store.gpt);
  if(!movieNames) return null;
  return (
    <div className="text-white bg-black mt-5">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieSearchResults[index]}
        ></MovieList>
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
