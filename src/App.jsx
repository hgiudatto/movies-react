import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import styles from "./App.module.css";
import {MovieDetails} from "./pages/MovieDetails";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/movies" element={<MoviesGrid />} /> */}
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
