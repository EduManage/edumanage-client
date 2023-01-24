import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";

export const router = createBrowserRouter([
<<<<<<< HEAD
<<<<<<< HEAD
    {
        path: "/", 
        element: <Main></Main>, 
        errorElement : <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }, 
          
        ]
    },
    
])
=======
=======
>>>>>>> 08a34a5b9526d6d902fb58cdc8c53ae27402167a
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage></ErrorPage>,
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
    ],
  },
]);
<<<<<<< HEAD
>>>>>>> c49d6519c8a987b710ee56445a5cd45ebb819cb9
=======

>>>>>>> 08a34a5b9526d6d902fb58cdc8c53ae27402167a
