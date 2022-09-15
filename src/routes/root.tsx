import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../pages/auth";
import ErrorPage from "../pages/error";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/signup",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
]);
