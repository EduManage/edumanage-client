import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fb from "../../Assets/facebook.png";
import ig from "../../Assets/instagram.png";
import tw from "../../Assets/twitter.png";
import yt from "../../Assets/youtube.png";
import em from "../../Assets/navEM.png";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import "./Navbar.css";
import { AuthContext } from "../../UserContext/UserContext";

const Navbar = () => {
  const [navColorChange, setNavColorChange] = useState(false);
  const [open, setOpen] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const handleLogout = () => {
    logOut().then(() => {
      // Sign-out successful.
    });
  };
  // on scroll bg change code
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavColorChange(true);
    } else {
      setNavColorChange(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  // Dark mode
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light")

  }

  return (
    <div
      className={`flex items-center z-50 w-full pt-5 pb-3 md:pb-3 ease-in-out duration-300 font-poppins-em fixed ${navColorChange ? "bg-white shadow-lg" : "bg-white md:bg-transparent"
        } `}
    >
      {/* logo and name section on navbar start */}
      <div className="w-1/3 flex justify-center md:w-1/6">
        <Link to="/" className="flex cursor-pointer items-center ">
          <img className="object-cover w-12" src={em} alt="logo" />
          {/* <span className="text-lg font-black text-gray-900 z-20">EduManage</span> */}
        </Link>
      </div>
      {/* logo and name section on navbar end */}

      {/* route names start  */}
      <div
        className={`w-full flex absolute md:static bg-white md:bg-transparent duration-300 py-2 md:py-0 ease-in flex-col md:flex-row justify-start text-center md:w-3/6 text-xs gap-5 font-medium ${open ? "top-[-250px]" : "top-24 "
          }`}
      >
        <div className="hover-underline-animation">
          <Link to="/">HOME</Link>
        </div>
        <div className="hover-underline-animation">
          <Link to="/courses">COURSE</Link>
        </div>
        <div className="hover-underline-animation">
          <Link to="/support-session">SCHEDULE</Link>
        </div>
        <div className="hover-underline-animation">
          <Link to="/instructordashboard">DASHBOARD</Link>
        </div>
        <div className="hover-underline-animation">
          <Link to="/news">NEWS</Link>
        </div>
        <div className="hover-underline-animation">
          <Link to="/student-support">STUDENT SUPPORT</Link>
        </div>
        <div className="hover-underline-animation">
          <Link to="/spCourses">SPECIAL</Link>
        </div>
      </div>
      {/* route names end  */}

      {/* auth section start */}
      <div className="text-xs w-2/3 md:w-1/6 flex justify-end items-center gap-2 font-medium">



        {user?.email ? (
          <div className="flex items-center gap-2">
            <div
              className="tooltip tooltip-bottom "
              data-tip={user?.displayName}
            >
              <Link to="/admin" className="">
                <div className="avatar online ">
                  <div className="w-8 rounded-full">
                    <img src={user?.photoURL ? user?.photoURL : 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='} alt="" />
                  </div>
                </div>
              </Link>
            </div>
            <button
              onClick={handleLogout}
              className="px-5 py-2 shadow-lg rounded-2xl bg-white hover:shadow-xl ease-in-out duration-300"
            >
              SIGN OUT
            </button>
            <Link
              to="/wishlist"
              className="tooltip tooltip-bottom "
              data-tip="Wishlist"
            >
              <BsFillBookmarkHeartFill className="text-rose-600 text-xl" />
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to={"/login"} className="hover-underline-animation">
              <button>LOGIN</button>
            </Link>
            <Link to={"/signup"}>
              <button className="px-5 py-2 shadow-lg rounded-2xl bg-white hover:shadow-xl ease-in-out duration-300">
                SIGN UP
              </button>
            </Link>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className=" z-20 cursor-pointer p-2 text-sm font-medium hover:border-gray-900/70 hover:text-gray-900/70 md:hidden"
        >
          <svg
            x-ref="menu"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            x-ref="close"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="hidden h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {/* auth section end */}

      {/* social icon start  */}
      <div className="w-1/6 hidden md:flex justify-center items-center gap-2 font-medium">
        <label htmlFor="Toggle2"  className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">

          <span className="relative" >
            <input id="Toggle2" type="checkbox" className="hidden peer " />
            <div onClick={handleThemeSwitch} className="w-10 h-4 rounded-full shadow  bg-white/80"></div>
            <div onClick={handleThemeSwitch} className="bg-black/90 absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
          </span>

        </label>
        <img className="w-4" src={fb} alt="" />
        <img className="w-4" src={ig} alt="" />
        <img className="w-4" src={tw} alt="" />
        <img className="w-4" src={yt} alt="" />
      </div>


      {/* social icon end  */}
    </div>
  );
};

export default Navbar;
