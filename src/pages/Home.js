import React from "react";
import Main from "../components/Main";
import Rows from "../components/Rows";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Rows rowId='1' title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Rows rowId='2' title='Popular' fetchURL={requests.requestPopular} />
      <Rows rowId='3' title='Trending' fetchURL={requests.requestTrending} />
      <Rows rowId='4' title='Top Rated' fetchURL={requests.requestTopRated} />
    </>
  );
};

export default Home;
