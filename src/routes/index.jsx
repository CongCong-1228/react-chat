import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/layout.jsx";
import ErrorPage from "@/error-page.jsx";
import Login from "@/components/login/login.jsx";
import App from "@/App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/layout",
    element: <Layout />,
  },
]);

export default router;
