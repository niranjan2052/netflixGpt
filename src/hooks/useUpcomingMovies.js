import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );
    const upCommingMovies = await data.json();
    dispatch(addUpcomingMovies(upCommingMovies.results));
  };
  useEffect(() => {
    upcomingMovies && getUpcommingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>useUpcomingMovies</div>;
};

export default useUpcomingMovies;
