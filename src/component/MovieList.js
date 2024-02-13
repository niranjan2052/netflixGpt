import React, { useState } from "react";
import { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const itemRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemRef.current.offsetLeft);
    setScrollLeft(itemRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    itemRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = (e) => {
    // console.log(e);
  };

  return (
    movies && (
      <div className="">
        <h1 className="text-3xl py-4 ">{title}</h1>
        <div
          className="flex px-6 overflow-y-hidden scrollbar-thin scrollbar-webkit"
          ref={itemRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="w-48">
              <MovieCard title={title} posterPath={movie.poster_path} />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default MovieList;
