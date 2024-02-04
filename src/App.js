import React from "react";
import Login from "./Login";
import Body from "./Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/body",
    element: <Body />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={appRoute}>
      {/* <Login/> */}
    </RouterProvider>
  );
};

export default App;
