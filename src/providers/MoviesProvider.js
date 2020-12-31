import React, { useState, createContext } from "react";

export const movieContext = createContext();

const moviesInit = [];

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesInit);

  return (
    <movieContext.Provider
      value={{
        movies,
        setMovies,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MoviesProvider;
