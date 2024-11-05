import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.less";
import "@/assets/styles/variables.less";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/index.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
