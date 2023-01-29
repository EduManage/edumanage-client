import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import Security from '../../Assets/Security.gif'
// import "./Login.css";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const from2 = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login success !!!");
        navigate(from2, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handleGoogleSign = () => {
    signInWithGoogle(googleProvider)
      .then((resul) => {
        const user = resul.user;
        toast.success("Login success with Google!!!");
        navigate(from2, { replace: true });
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className=' flex flex-col md:flex-row justify-evenly items-center py-24 font-poppins-em gap-10'>
      <div>
        <img src={Security} alt="" />
      </div>
      <div className='w-96 p-7 border border-black/40 rounded-2xl drop-shadow-sm'>
        <h2 className='text-xl text-center'>Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Email</span></label>
            <input type="text"
              {...register("email", {
                required: "Email Address is required"
              })}
              className="input input-bordered w-full max-w-xs" />
            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span></label>
            <input type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
              })}
              className="input input-bordered w-full max-w-xs" />
            <label className="label"> <span className="label-text">Forget Password?</span></label>
            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
          </div>
          <button className='px-3 py-2 rounded-xl text-white bg-black border-2 hover:bg-white hover:text-black w-full ease-in-out duration-300 ' value="Login" type="submit">Login</button>
          <div>
            {loginError && <p className='text-red-600 text-sm text-center py-3'>{loginError}</p>}
          </div>
        </form>
        <p className="text-sm">Don't have an account? <Link className='text-purple-400' to="/signup">Create new Account</Link></p>
        <p className="text-center text-sm mt-2">Or login with</p>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleSign} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>


      </div>
    </div>
  );
};

export default Login;
