import React from "react";
import Search from "../components/Search";
import MoviesGrid from "../components/MoviesGrid";

const LandingPage = () => {
  return (
    <div>
      <Search />
      <br></br>
      <MoviesGrid />
    </div>
  );
};

export default LandingPage;
