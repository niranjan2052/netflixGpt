# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Setup The Project
    - npx create-react-app
    - configure tailwindCSS
    - Header
    - Routing of App
    - Login Form
    - Sign up Form
    - Form Validation
    - useRef Hook
    - Firebase Setup
    - Deploying our app to production
    - Create SignUp User Account
    - Implement Sign In user API
    - Created Redux Store With userSlice
    - Implement Sign Out 
    - Update Profile
    - BugFix: Sign up user displayName and profile picture update
    - BugFix: If the user eis not logged in Redirect /browse to Login Page and vice-versa 
    - Unsubscribed to the onAuthStateChanged callback
    - Add hardcoded values to the constants file.
    - Register for TMDB API and create a new app and get access token
    - Get Data from TMDB Now Playing Movie list API.
    - We created custom hook for nowPlayinMovie
    - Create movieSlice
    - Update Store with movies data
    - Planning for MainContainer & Secondary Container
    - Fetch Data for Trailer Video
    - Update Store with Trailer Video Data
    - Embedded the YouTube Video and make it auto play and Mute.
    - Added Tailwind CSS to make it look good
    - Build Seccondary Component
    - Build Movie List
    - Build Moive Card
    - TMDB Image CDN URL
    - Made the Browser page good using Tailwind CSS
    - usePopularMovie and other Custome Hooks
    - GPT Search Page
    - GPT Search Bar
    - (BONUS) Multi-language Feature in our APP
    - GPT Search GEMINI
    - API Call for GEMINI
    - Fetched Movies through GEMINI movie suggstions from TMDB
    - Created GPT slice and added data
    - We re-used movie list component to make movie suggestion container.
    - We addeed Memoization
    - Addeding .env file to he git ignore.
    - We made our site responsive.

# Project Feature Planning
    - Login/Sign Up Page
        - Sign In /Sign up Form
        - readirect to Browser Page
    - Browser(Only after Authentication)
        - Header
        - Main Movie
            - Trailer in Background
            - Title and Description
            - Movie Suggestions
                - MovieList * N
    - NetFlixGPT
        - Search bar
        - Movie Suggestions
