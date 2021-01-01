import React, { useContext } from "react";
import { Paper, Box, Typography, Grid } from "@material-ui/core";
import { movieContext } from "../providers/MoviesProvider";
import MovieCard from "./MovieCard";

const Results = () => {
  const { movies, addNomination, titleRef } = useContext(movieContext);

  return (
    <Paper>
      <Box p={3} minHeight="200px">
        <Typography gutterBottom variant="h6">
          Results for "{titleRef.current}"
        </Typography>

        <Grid container spacing={2}>
          {movies.map((movie) => {
            return (
              <MovieCard
                movie={movie}
                button={"nominate"}
                action={addNomination}
                key={movie.imdbID}
              />
            );
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Results;
