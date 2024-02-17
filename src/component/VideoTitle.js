import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-80 px-12 absolute text-white top-16 md:top-0 bg-gradient-to-tr from-black">
      <div className="-ml-6 md:-ml-0 absolute top-64 md:relative md:top-0">
        <h1 className="text-4xl font-bold -mt-24 md:-mt-0">{title}</h1>
        <p className="hidden md:inline-block py-4 text-lg w-1/4 text-justify">
          {overview}
        </p>
        <div className="mt-4 md:mt-0">
          <button className="bg-white text-black p-2 md:p-4 px-3 md:px-12 mx-2 rounded md:text-xl hover:bg-opacity-80">
            ▶️Play
          </button>
          <button className="bg-gray-500 text-white p-2 md:p-4 px-3 md:px-12 mx-2 rounded md:text-xl hover:bg-opacity-80">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
