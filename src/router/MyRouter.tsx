import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../page/Home";
import { Advantage } from "../page/Advantage";
import { AboutMe } from "../page/AboutMe";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
import { Layaut } from "../page/Layaut";
import { Profile } from "../page/Profile";
import { Lessons } from "../page/Lessons";
import { Inner } from "../page/Lessons/Inner";

export const MyRouter: React.FC = React.memo(() => {
  const router = useRoutes([
    {
      path: '/',
      element: <Layaut />,
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "profile", element: <Profile /> },
        { path: "aboutMe", element: <AboutMe /> },
        { path: "advantage", element: <Advantage /> },
        {
          path: "lessons",
          element: <Lessons />,
          children: [
            { path: ":name", element: <Inner /> }
          ]
        }
      ]
    },
    {
      path: "*",
      element: <h1>404, Page not found</h1>,
    }
  ]);
  return router;
});
