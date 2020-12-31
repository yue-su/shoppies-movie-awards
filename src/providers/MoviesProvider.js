import React, { useState, createContext } from "react";

export const movieContext = createContext();

const moviesInit = [];

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesInit);

  const setMovieList = (list) => {
    setMovies(list);
  };

  return (
    <movieContext.Provider
      value={{
        movies,
        setMovieList,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MoviesProvider;
