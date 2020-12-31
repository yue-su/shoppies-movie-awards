import React, { useState, createContext } from "react";

export const movieContext = createContext();

const apiURL = "http://www.omdbapi.com/apikey.aspx";
const moviesInit = [];

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(moviesInit);

  return (
    <movieContext.Provider
      value={{
        movies,
        setMovies,
        apiURL,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MoviesProvider;
