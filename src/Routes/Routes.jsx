import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SIgnUp from "../pages/SIgnUp/SIgnUp";
import InstructorsPage from "../components/InstructorsPage.jsx/InstructorsPage";
import ClassesPage from "../components/ClassesPage/ClassesPage";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import AddClass from "../Dashboard/Instructors/AddClass";
import MyClass from "../Dashboard/Instructors/MyClass";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SIgnUp />,
      },
      {
        path: "/instructors",
        element: <InstructorsPage />,
      },
      {
        path: "/classes",
        element: <ClassesPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "myclass",
        element: <MyClass />,
      },
      {
        path: "addclass",
        element: <AddClass />,
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
