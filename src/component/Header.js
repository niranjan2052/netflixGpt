import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="flex justify-between items-center absolute top-0 right-0 bottom-100 left-0 bg-black bg-opacity-40 bg-gradient-to-b from-[#000D] via-transparent to-transparent">
      <img
        className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] my-2 h-20 max-md:h-12 max-lg:h-16 mx-28 max-sm:m-auto max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-52 max-sm:h-24"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12"
            src={
              user?.photoURL ||
              "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            }
            alt="UserIcon"
          />
          <button
            onClick={handleSignOut}
            className="px-2 text-white font-semibold bg-[#e40814]"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
