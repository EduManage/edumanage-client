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
import SingleCourse from "../../Pages/Courses/MainCourses/SingleCourse";
import AllInstructor from "../../Pages/Instructor/AllInstructor/AllInstructor";
import TeacherDeatils from "../../Pages/AdminDashboard/Instructor/TeacherDetails/TeacherDeatils";
import AllBooks from "../../Pages/AdminDashboard/Books/AllBooks/AllBooks";
import AddBook from "../../Pages/AdminDashboard/Books/AddBook/AddBook";
import AllParents from "../../Pages/AdminDashboard/Parents/AllParents/AllParents";
import AddParents from "../../Pages/AdminDashboard/Parents/AddParents/AddParents";
import AllStudents from "../../Pages/AdminDashboard/Students/AllStudents/AllStudents";
import AddStudent from "../../Pages/AdminDashboard/Students/AddStudent/AddStudent";
import AddNews from "../../Components/addNews/AddNews";
import AllNews from "../../Pages/News/AllNews";

import Wishlist from "../../Shared/Wishlist/Wishlist";
import AdminDashboardHome from "../../Pages/AdminDashboard/AdminDashboardHome/AdminDashboardHome";

import SupportSession from "../../Pages/SupportSession/SupportSession";
import StudentSupport from "../../Pages/AdminDashboard/StudentSupport/StudentSupport.js";

import Careers from "../../Pages/CareersArea/Careers";
import JobCareers from "../../Pages/CareersArea/JobCareers";

import InstructorDashboardLayout from "../../Layout/IntructorDashboard/InstructorDashboardLayout";
import InstructorDashboard from "../../Layout/IntructorDashboard/InstructorDashboard";
import AddCourses from "../../Layout/IntructorDashboard/AddCourses";
import SpecialCourses from "../../Pages/SpecialCourses/SpecialCourses";
import MyCourses from "../../Pages/SpecialCourses/MyCourses";
import JobAdmin from "../../Pages/AdminDashboard/JobAdmin/JobAdmin";
import AllJob from "../../Pages/AdminDashboard/JobAdmin/AllJob/AllJob";
import MyInsCourses from "../../Layout/IntructorDashboard/MyInsCourses";


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
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/jobdetails/:id",
        element: <JobCareers />,
        loader: ({ params }) =>
          fetch(
            `https://edumanage-server-bice.vercel.app/jobdetails/${params.id}`
          ),
      },

      {
        path: "/all-instrutor",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/instrctorDetails/:id",
        element: <TeacherDeatils />,
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-gray-alpha.vercel.app/instructorDetails/${params.id}`
          ),
      },
      {
        path: "/news",
        element: <News></News>,
      },
      {
        path: "/student-support",
        element: <StudentSupport />,
      },
      {
        path: "/support-session",
        element: <SupportSession />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`https://edumanage-server.vercel.app/news/${params.id}`),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <SingleCourse />,
        loader: ({ params }) =>
          fetch(
            `https://edumanage-server-ivory.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/all-instrutor",
        element: <AllInstructor></AllInstructor>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/instrctorDetails/:id",
        element: <TeacherDeatils />,
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-gray-alpha.vercel.app/instructorDetails/${params.id}`
          ),
      },

      // {
      //   path: "/instructordashboard",
      //   element: <InstructorDashboard />
      // },
      {
        path: "addNews",
        element: <AddNews />,
      },
      {
        path: "allNews",
        element: <AllNews />,
      },
      {
        path: "/spCourses",
        element: <SpecialCourses />,
      },
      {
        path: "myCourses",
        element: <MyCourses />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard></AdminDashboard>,
    children: [
      {
        path: "/admin",
        element: <AdminDashboardHome />,
      },
      {
        path: "/admin/add-students",
        element: <AddStudent></AddStudent>,
      },
      {
        path: "/admin/jobAdmin",
        element: <JobAdmin />,
      },
      {
        path: "/admin/alljob",
        element: <AllJob />,
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
      {
        path: "/admin/add-parents",
        element: <AddParents></AddParents>,
      },
      {
        path: "/admin/all-parents",
        element: <AllParents></AllParents>,
      },
      {
        path: "/admin/add-books",
        element: <AddBook></AddBook>,
      },
      {
        path: "/admin/all-books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/admin/addNews",
        element: <AddNews />,
      },
      {
        path: "/admin/allNews",
        element: <AllNews />,
      },
    ],
  },
  {
    path: "/instructordashboard",
    element: <InstructorDashboardLayout />,
    children: [
      {
        path: "/instructordashboard",
        element: <InstructorDashboard />,
      },
      {
        path: "/instructordashboard/addcourses",
        element: <AddCourses />,
      },
      {
        path: "/instructordashboard/mycourses",
        element: <MyInsCourses />,
      },
    ],
  },
]);
