import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO_URL, USER_AVATAR } from "../utils/constants";
import { toggleButtonName, toggleshowGptPage } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const buttonName = useSelector((store) => store?.gpt?.buttonName);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  const handleGptSearchClick = () => {
    dispatch(toggleshowGptPage());
    dispatch(toggleButtonName());
  };
  return (
    <div className="flex justify-between items-center absolute top-0 right-0 bottom-100 left-0 bg-black bg-opacity-40 bg-gradient-to-b from-[#000D] via-transparent to-transparent z-50">
      <img
        className="drop-shadow-[0_35px_35px_rgba(255,255,255,0.5)] my-2 h-20 max-md:h-12 max-lg:h-16 mx-28 max-sm:m-auto max-sm:absolute max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:w-52 max-sm:h-24"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <div className="flex p-2">
          <button
            className="bg-[#e40814] text-white rounded px-2 py-1 mr-4"
            onClick={handleGptSearchClick}
          >
            {buttonName}
          </button>
          <img
            className="w-12 h-12"
            src={user?.photoURL || { USER_AVATAR }}
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
