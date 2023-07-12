import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      await logOut();
      navigate("/signup");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="flex gap-x-5">
          <Link to="/account">
            <button className="text-white bg-red-600 px-5 py-2 rounded ">
              Account
            </button>
          </Link>
            <button onClick={handlelogout} className="text-white py-2">
              Log out
            </button>
        </div>
      ) : (
        <div className="flex gap-x-5">
          <Link to="/login">
            <button className="text-white bg-red-600 px-5 py-2 rounded ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white py-2">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
