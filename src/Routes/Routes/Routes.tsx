import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../../Layout/AdminDashboard/AdminDashboard";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";

import AddTeachers from "../../Pages/AdminDashboard/Teachers/AddTeachers/AddTeachers";
import AllTeachers from "../../Pages/AdminDashboard/Teachers/AllTeachers/AllTeachers";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import News from "../../Pages/News/News";
import NewsDetails from "../../Pages/News/NewsDetails";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import SingleCourse from '../../Pages/Courses/MainCourses/SingleCourse';
import AllInstructor from "../../Pages/AdminDashboard/Instructor/AllInstructor/AllInstructor";
import TeacherDeatils from "../../Pages/AdminDashboard/Instructor/TeacherDetails/TeacherDeatils"

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

        path: "/all-instrutor",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/all-instrutor",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/instrctorDetails/:id",
        element: <TeacherDeatils />,
        loader: ({ params }) => fetch(`https://doctors-portal-server-gray-alpha.vercel.app/instructorDetails/${params.id}`),

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
        element: <Courses></Courses>,

      },
      {
        path: "/courses/:id",
        element: <SingleCourse />,
        loader: ({ params }) => fetch(`https://recyclelib-server.vercel.app/courses/${params.id}`)

      },
      {
        path: "/all-instrutor",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/instrctorDetails/:id",
        element: <TeacherDeatils />,
        loader: ({ params }) => fetch(`https://doctors-portal-server-gray-alpha.vercel.app/instructorDetails/${params.id}`)
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      // {
      //   path: "/admin/add-students",
      //   element: <AddStudent></AddStudent>,
      // },
      // {
      //   path: "/admin/all-students",
      //   element: <AllStudents></AllStudents>,
      // },
      {
        path: "/admin/add-teachers",
        element: <AddTeachers></AddTeachers>,
      },
      {
        path: "/admin/all-teachers",
        element: <AllTeachers></AllTeachers>,
      },
    ],
  },
]);
