import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { MY_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  const fullName = useRef("Default");
  const email = useRef(null);
  const password = useRef(null);
  const toggleForm = () => {
    setIsSignin(!isSignin);
  };

  const handleSubmit = () => {
    const errorMessage = checkValidData(
      fullName.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMessage);

    if (errorMessage) return;

    if (!isSignin) {
      //Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: fullName.current.value,
            photoURL: MY_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              console.error(error);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign IN Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="max-sm:overflow-hidden">
      <Header />
      <img
        className="max-md:max-w-none "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/6b98821e-5cd5-4929-8212-723d7e11ffc3/NP-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="bg-img"
      />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-10 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000A] text-white max-sm:w-full"
      >
        <h1 className="text-3xl font-bold my-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        <div className="px-8 w-[400px] max-sm:w-auto">
          {!isSignin && (
            <input
              ref={fullName}
              className="my-2 p-4 w-full bg-transparent border rounded"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
            />
          )}
          <input
            className="my-2 p-4 w-full bg-transparent border rounded"
            ref={email}
            type="text"
            name="email"
            id="email"
            placeholder="Email or phone number"
          />
          <input
            className="my-2 p-4 w-full bg-transparent border rounded"
            ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <p className="text-[#e40814] font-semibold drop-shadow-2xl shadow-white">
            {errorMessage}
          </p>
          <button
            className="my-2 p-2 w-full bg-[#e40814] font-semibold rounded hover:bg-[#c11119]"
            onClick={handleSubmit}
            type="submit"
          >
            {isSignin ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <div className="py-2 text-center font-semibold">Forgot password?</div>
        <div className="mt-20 flex">
          {isSignin && (
            <>
              <input type="checkbox" name="remember" id="remember" />
              <h6 className="px-2 font-semibold">Remember me</h6>
            </>
          )}
        </div>
        {isSignin ? (
          <div>
            <h6 className="text-gray-400">
              New to Netflix-GPT?
              <span
                onClick={toggleForm}
                className="px-2 text-white font-bold hover:underline cursor-pointer"
              >
                Sign up now.
              </span>
            </h6>
          </div>
        ) : (
          <div>
            <h6 className="text-gray-400">
              Already registered?
              <span
                onClick={toggleForm}
                className="px-2 text-white font-bold hover:underline cursor-pointer"
              >
                Sign in now
              </span>
            </h6>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
