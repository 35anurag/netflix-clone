import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../context/AuthContext'

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { user, logIn } = UseAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate('/')
    } catch (error) {
      console.log("error");
      setError(error.message)
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
              <h1 className="text-3xl font-bold pb-4">Sign In</h1>
              {error ? <p className='p-3 bg-red-400 my-1'>{error}</p>: null}
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
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
                  <p>
                    <input className="mr-1" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="my-8 text-gray-500">
                  New to Netflix?
                  <span className="text-gray-300 cursor-pointer hover:text-gray-100 ml-2">
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login