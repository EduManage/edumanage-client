import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
// import "./Login.css";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from2 = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const logInHandle = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Login success !!!");
        navigate(from2, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const UserGoogle = () => {
    signInWithGoogle(googleProvider)
      .then((resul) => {
        const user = resul.user;
        toast.success("Login success with Google!!!");
        navigate(from2, { replace: true });
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="bg-slate-100 rounded-xl boxColor">
        <div className="text-xl text-center p-7">
          <h2>Login Now</h2>
        </div>
        <div className="p-7 text-left">
          <form onSubmit={handleSubmit(logInHandle)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full my-2 p-1 rounded"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full my-2 p-1 rounded"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
            </div>

            <input
              className="bg-violet-700 hover:bg-violet-400 w-full text-white hover:text-black mt-5 p-3 font-bold rounded-lg"
              type="submit"
              value={`LogIn`}
            />
          </form>
          <p className="mt-5">
            New to Our Page{" "}
            <Link className="text-sm text-violet-700" to={"/signup"}>
              Creat new Account
            </Link>
          </p>
          <div className="divider"></div>
          <button
            onClick={UserGoogle}
            className="bg-pink-500 hover:bg-pink-200 text-white hover:text-black font-bold my-3 p-2 rounded-lg w-full"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
