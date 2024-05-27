import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Main from "./routes/Main";
import Error from "./components/Error";
import Login from "./routes/Login";
import Community from "./components/Community";
import Drugs from "./routes/Drugs";
import DrugDetail from "./components/DrugDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/drugs",
          element: <Drugs />,
        },
        {
          path: "/drugs/:id",
          element: <DrugDetail />,
        },
        {
          path: "/community",
          element: <Community />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
