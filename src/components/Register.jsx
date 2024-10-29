import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //register User
  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("user Registration successfull");
      navigate("/login");
    } catch (error) {
      setMessage("Please Provide valid email and password");
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      alert("Google login failed");
      console.log(error);
    }
  };
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="Enter Email"
              className="shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-none focus:shadow"
              name="email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="Enter Password"
              className="shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-none focus:shadow"
              name="password"
            />
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div className="mb-4">
            <button className="px-3 py-2 bg-blue-500 hover:bg-blue-800 text-white font-bold rounded focus:outline-none">
              Sign Up
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 mb-4 text-sm">
          Already have an account? Please{" "}
          <Link to="/login" className=" text-blue-500 hover:text-blue-800">
            Login.
          </Link>
        </p>
        {/* google signin */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center rounded  justify-center bg-secondary text-white font-bold py-2 px-4 hover:bg-blue-500 focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="text-center mt-6 text-gray-500 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
