import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
// import "./Register.css";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from2 = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const singUpHandle = (data) => {
    console.log(data.email, data.password);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
        toast.success("Creat New Accoutn!!!");
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
        console.log(user);
        toast.success("Creat New Account with google!!!");
        navigate(from2, { replace: true });
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="bg-slate-100 rounded-xl boxColor">
        <div className="text-xl text-center pt-7 pl-7 pr-7">
          <h2>Register Now!</h2>
        </div>
        <div className="p-7 text-left">
          <form onSubmit={handleSubmit(singUpHandle)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full my-2 p-1 rounded"
                {...register("name", { required: true })}
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
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
              value={`Register`}
            />
          </form>
          <p className="mt-5">
            Already have an account{" "}
            <Link className="text-sm text-violet-700" to={"/login"}>
              Please Login
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

export default SignUp;
