import React from "react";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Error = () => {
  const navigate = useNavigate();
  const handleHomePage = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-[100vh] flex bg-black">
      <div className="flex flex-col justify-center items-center m-auto">
        <div className="w-96">
          <img src={LOGO_URL} alt="NetflxLogo" />
        </div>
        <h1 className="text-4xl font-bold text-white">
          Whoops!! Something Went Wrong
        </h1>
        <button
          onClick={handleHomePage}
          className="mt-6 px-4 py-2 text-xl border border-white text-white rounded hover:bg-white hover:text-black"
        >
          Go To HomePage
        </button>
      </div>
    </div>
  );
};

export default Error;
