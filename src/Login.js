import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const toggleForm = () => {
    setIsSignin(!isSignin);
  };
  return (
    <div className="max-sm:overflow-hidden">
      <Header />
      <img
        className="max-md:max-w-none "
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/6b98821e-5cd5-4929-8212-723d7e11ffc3/NP-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="bg-img"
      />

      <form className="p-10 rounded absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000A] text-white max-sm:w-full">
        <h1 className="text-3xl font-bold my-4">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        <div className="px-8 w-[400px] max-sm:w-auto">
          {!isSignin && (
            <input
              className="my-2 p-4 w-full bg-transparent border rounded"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
            />
          )}
          <input
            className="my-2 p-4 w-full bg-transparent border rounded"
            type="text"
            name="email"
            id="email"
            placeholder="Email or phone number"
          />
          <input
            className="my-2 p-4 w-full bg-transparent border rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <button
            className="my-2 p-2 w-full bg-[#c11119] font-semibold rounded"
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
