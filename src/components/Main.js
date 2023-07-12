import axios from "axios";
import React, { useState, useEffect } from "react";
import Request from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(Request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) =>{
    if(str?.length>num){
      return str.slice(0, num) + '...';
    }
    else{
      return str;
    }
  }

  return (
    <div className="w-full h-[450px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[450px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={"https://image.tmdb.org/t/p/original/" + movie?.backdrop_path}
          alt={movie?.title}
        />
        {/* It is known as optional chaining operator. It is used to access a property of an object that may or may not exist.  */}
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <div className="text-4xl font-semibold pb-4">
            {movie?.original_title}
          </div>
          <div className="flex gap-x-4">
            <button className=" border bg-gray-300 px-5 py-2 text-black font-semibold">
              Play
            </button>
            <button className=" border border-gray-300 text-white px-5 py-2">
              Watch Later
            </button>
          </div>
          <span className="pt-[20px] text-gray-400 text-xs">Released {movie?.release_date}</span>
          <div className="w-full md:max-w-[50%] lg:max-w-[80%] xl:max-w-[45%] text-gray-200">{truncateString(movie?.overview, 150)}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
