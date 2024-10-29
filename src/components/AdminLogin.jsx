import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import getBaseUrl from "../utils/baseUrl";

const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          alert("Token has expired,Please Login again");
          navigate("/");
        }, 3600 * 1000);
      }
      alert("Admin Login Successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("please provide valid username and password");
      console.log(error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="username"
              id="username"
              placeholder="Enter Username"
              className="shadow appearance-none border rounded w-full px-3 py-2 leading-tight focus:outline-none focus:shadow"
              name="username"
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
            <button className="px-3 py-2 w-full bg-blue-500 hover:bg-blue-800 text-white font-bold rounded focus:outline-none">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
