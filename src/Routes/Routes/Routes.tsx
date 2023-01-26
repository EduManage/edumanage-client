import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../../Layout/AdminDashboard/AdminDashboard";
import Main from "../../Layout/Main/Main";
import AddStudent from "../../Pages/AdminDashboard/Students/AddStudent/AddStudent";
import AllStudents from "../../Pages/AdminDashboard/Students/AllStudents/AllStudents";
import AddTeachers from "../../Pages/AdminDashboard/Teachers/AddTeachers/AddTeachers";
import AllTeachers from "../../Pages/AdminDashboard/Teachers/AllTeachers/AllTeachers";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import NewsDetails from "../../Pages/News/NewsDetails";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {

        path: "/news",
        element: <News></News>
      },
      {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>
},
{
        path: "/courses",
        element: <Courses></Courses> ,

      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/admin/add-students",
        element: <AddStudent></AddStudent>
      },
      {
        path: "/admin/all-students",
        element: <AllStudents></AllStudents>
      },
      {
        path: "/admin/add-teachers",
        element: <AddTeachers></AddTeachers>
      },
      {
        path: "/admin/all-teachers",
        element: <AllTeachers></AllTeachers>
      },
    ]
  }
]);
