import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage>Error</ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
