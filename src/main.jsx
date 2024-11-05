import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.less";
import "@/assets/styles/variables.less";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/layout/layout.jsx";
import ErrorPage from "@/error-page.jsx";
import Login from "@/components/login/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
