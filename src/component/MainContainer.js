import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

function MainContainer() {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <>
      <div className="bg-black h-40 md:hidden">I am Background</div>
      <div>
        <VideoBackground movieId={id} />
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </>
  );
}

export default MainContainer;
