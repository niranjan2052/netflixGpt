import React from "react";

const Header = () => {
  return (
    <div className=" absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-40 bg-gradient-to-b from-[#000A] via-transparent to-[#000A] pointer-events-none">
      <img
        className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] my-2 h-20 max-md:h-12 max-lg:h-16 mx-28 max-sm:m-auto max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-52 max-sm:h-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
    </div>
  );
};

export default Header;
