import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
// import "./Login.css";

interface IFormInput {
  email: string;
  password: string;
  age: number;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const handleLoging: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="bg-slate-100 rounded-xl boxColor">
        <div className="text-xl text-center p-7">
          <h2>Login Now</h2>
        </div>
        <div className="p-7 text-left">
          <form onSubmit={handleSubmit(handleLoging)}>
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
            <Link className="text-sm text-violet-700" to={"/singup"}>
              Creat new Account
            </Link>
          </p>
          <div className="divider"></div>
          <button className="bg-pink-500 hover:bg-pink-200 text-white hover:text-black font-bold my-3 p-2 rounded-lg w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
