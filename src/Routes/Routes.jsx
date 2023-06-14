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
import ManageClasses from "../Dashboard/ManageClasses/ManageClasses";
import UpdateData from "../Dashboard/Instructors/UpdateData";
import StudentsClasses from "../Dashboard/Students/StudentsClasses/StudentsClasses";
import EnrolledClasses from "../Dashboard/Students/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Dashboard/Students/PaymentHistory/PaymentHistory";
import Payment from "../Dashboard/Students/Payment/Payment";
import PrivateRoute from "./PrivateRoute.jsx";
import InstructorRoute from "./InstructorRoute";

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // students route
      {
        path: "myselectedclass",
        element: <StudentsClasses />,
      },
      {
        path: "enrolledclass",
        element: <EnrolledClasses />,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory />,
      },
      {
        path: "payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/paystudentclasses/${params.id}`),
      },
      // instructors routes
      {
        path: "myclass",
        element: (
          <InstructorRoute>
            <MyClass />
          </InstructorRoute>
        ),
      },
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
      {
        path: "instructors/:id",
        element: (
          <InstructorRoute>
            <UpdateData />
          </InstructorRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructors/${params.id}`),
      },
      // admin routes
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
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
