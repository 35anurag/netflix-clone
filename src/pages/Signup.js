import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UseAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/7df39019-ba00-41d0-bb0b-61a7953a57a6/NP-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-20">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 text-white rounded">
            <div className="max-w-[320px] mx-auto py-10">
              <h1 className="text-3xl font-bold pb-4">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-4 my-2 bg-gray-800 rounded"
                  type="email"
                  placeholder="Email or phone number"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-4 my-2 bg-gray-800 rounded"
                  type="password"
                  placeholder="Password"
                />
                <button className="bg-red-600 py-3 px-10 mt-6  rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
                  <p>
                    <input className="mr-1" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="my-8 text-gray-500">
                  Already subscribed to Netflix?{" "}
                  <span className="text-gray-300 cursor-pointer hover:text-gray-100">
                    <Link to="/login">Sign In</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
