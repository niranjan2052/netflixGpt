import React, { useRef } from "react";
import { API_OPTIONS, BG_URL } from "../utils/constants";
import { SearchOutlined } from "@ant-design/icons";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import genAI from "../utils/gemini";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langIdentifier = useSelector((store) => store?.config?.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search Movie in TMDB

  const searchMovie = async (movieName) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    if (!searchText.current.value) return;

    //Integration of Gemini API
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const geminiQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query :" +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example: 'Anchorman: The Legend of Ron Burgundy, The Hangover, Bridesmaids, 21 Jump Street, Superbad'";

      const prompt = geminiQuery;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const movieNameList = text.split(",");

      const data = movieNameList.map((movie) => searchMovie(movie));
      const tmdbMovieList = await Promise.all(data);
      dispatch(addGptMovieResult({movieNames: movieNameList ,movieSearchResults: tmdbMovieList}));
    } catch (error) {
      console.error("Some Error Occor");
    }
  };

  return (
    <div>
      <img
        className="absolute max-md:max-w-none -z-10"
        src={BG_URL}
        alt="bg-img"
      />
      <div className="flex justify-center pt-[10%]">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-1/2 grid grid-cols-12 bg-black rounded-lg"
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 col-span-9"
            name="gptSearchBar"
            id="gptSearchBar"
            placeholder={lang[langIdentifier].searchBoxPlaceholder}
            required
          />
          <button
            onClick={handleGptSearch}
            className="bg-netflixColor col-span-3 text-white m-4 px-4 py-2 rounded-lg"
          >
            <SearchOutlined
              style={{
                fontSize: "1.5em",
              }}
            />
            {lang[langIdentifier].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
