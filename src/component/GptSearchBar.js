import React from "react";
import { BG_URL } from "../utils/constants";
import { SearchOutlined } from "@ant-design/icons";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langIdentifier = useSelector((store) => store?.config?.lang);
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
            type="text"
            className="p-4 m-4 col-span-9"
            name="gptSearchBar"
            id="gptSearchBar"
            placeholder={lang[langIdentifier].searchBoxPlaceholder}
          />
          <button className="bg-netflixColor col-span-3 text-white m-4 px-4 py-2 rounded-lg">
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
