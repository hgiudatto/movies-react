import React from "react";
import movies from "./movies.json";
import MovieCard from "./MovieCard";
import styles from "./MoviesGrid.module.css";

const MoviesGrid = () => {
  console.log(movies);
  return (
    <ul className={styles.movieGrid}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />
      })}
    </ul>
  );
};

export default MoviesGrid;
