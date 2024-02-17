import { useSelector } from "react-redux";
import React from "react";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const movies = useSelector((store) => store?.movies);
  return (
    (Object.keys(movies).length!==0) && (
      <div className="bg-black text-white mt-56 md:mt-0">
        <div className="mr-2 ml-2 md:ml-4 md:mr-4 -mt-64 relative z-20">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies?.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
          <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />

        </div>
        {/* 
      MovieList - Popular
      Cards
      MovieList - NowPlaying
      MovieList - Trending
      MovieList - Horror
    */}
      </div>
    )
  );
}

export default SecondaryContainer;
