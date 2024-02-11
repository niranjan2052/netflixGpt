import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId)=> {
    const dispatch = useDispatch();
    // fetch trailer video and update the stoer with the trailer video data
      const getMovieVideos = async () => {
        try {
          const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
            API_OPTIONS
          );
          const json = await data.json();
          // console.log(json.results[0].type);
    
          const filterData = json.results.filter(
            (video) => video.type === "Trailer"
          );
          const trailer = filterData.length ? filterData[0] : json.results[0];
          dispatch(addTrailerVideo(trailer));
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getMovieVideos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useMovieTrailer;