import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, login } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    login(email, password)
      .then((result) => {
        const user = result.user;
        const userInfor = {
          name: data.name,
          email: data.email,
        };
        axiosPublic
          .post("/users", userInfor)
          .then((response) => {
            alert("Signin successful!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setErrorMessage("Please provide valid email & password!");
      });
    reset();
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        const userInfor = {
          name: result?.user?.displayName,
          email: result?.user?.email,
        };
        axiosPublic
          .post("/users", userInfor)
          .then((response) => {
            alert("Signin successful!");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    
    <div className="max-w-md bg-[#006400] shadow w-full mx-auto flex items-center justify-center my-20">
      <div className="mb-5">
        <form className="card-body" method="dialog" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg text-[#FFF8E1]">Please Login!</h3>

          {/* email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#FFF8E1]">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>}
          </div>

          {/* password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#FFF8E1]">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">Password is required.</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover mt-2 text-[#FFF8E1]">
                Forgot password?
              </a>
            </label>
          </div>

          {/* show errors */}
          {errorMessage && (
            <p className="text-red-500 text-xs italic">
              Provide a correct username & password.
            </p>
          )}

          {/* submit btn */}
          <div className="form-control mt-4">
            <input
              type="submit"
              className="btn bg-green-500 text"
              value="Login"
            />
          </div>

          {/* close btn */}
          <Link to="/">
            <div className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </div>
          </Link>

          <p className="text-center my-2 text-[#FFF8E1]">
            Don’t have an account?
            <Link to="/signup" className="underline text-red-500 ml-1">
              Signup Now
            </Link>
          </p>
        </form>
        <div className="text-center space-x-3">
          <button onClick={handleRegister} className="btn btn-circle hover:bg-green-500 hover:text-white">
            <FaGoogle />
          </button>
          <button className="btn btn-circle hover:bg-green-500 hover:text-white">
            <FaFacebookF />
          </button>
          <button className="btn btn-circle hover:bg-green-500 hover:text-white">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default Login;
