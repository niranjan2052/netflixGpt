import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
    const popularMovies = await data.json();
    dispatch(addPopularMovies(popularMovies.results));
  };

  useEffect(() => {
    getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default usePopularMovies;
