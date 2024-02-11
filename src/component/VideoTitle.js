import React from "react";

function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-80 px-12 absolute text-white top-0 bg-gradient-to-tr from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/4 text-justify">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 mx-2 rounded text-xl hover:bg-opacity-80">▶️Play</button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-2 rounded text-xl hover:bg-opacity-80">More Info</button>
      </div>
    </div>
  );
}

export default VideoTitle;
