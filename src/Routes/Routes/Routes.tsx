import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../../Layout/AdminDashboard/AdminDashboard";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About";
import AddStudent from "../../Pages/AdminDashboard/Students/AddStudent/AddStudent";
import AllStudents from "../../Pages/AdminDashboard/Students/AllStudents/AllStudents";
import AddTeachers from "../../Pages/AdminDashboard/Teachers/AddTeachers/AddTeachers";
import AllTeachers from "../../Pages/AdminDashboard/Teachers/AllTeachers/AllTeachers";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import AllInstructor from "../../Pages/Instructor/AllInstructor/AllInstructor";
import TeacherDeatils from "../../Pages/Instructor/TeacherDetails/TeacherDeatils";
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/instructorDetails/${params.id}`),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/admin/add-students",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "/admin/all-students",
        element: <AllStudents></AllStudents>,
      },
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
