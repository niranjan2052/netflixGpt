export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const MY_AVATAR =
  "https://avatars.githubusercontent.com/u/34083712?s=400&u=0b7fa15b968d8f9b3ce0c3009b674fadcf282a6f&v=4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/6b98821e-5cd5-4929-8212-723d7e11ffc3/NP-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English" },
  { identifier: "ne", name: "नेपाली" },
  { identifier: "hi", name: "हिंदी" },
  { identifier: "es", name: "española" },
];

export const NO_POSTER_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019";

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;