import React, { useContext } from "react";
import { Paper, Box, Typography, Grid } from "@material-ui/core";
import { movieContext } from "../providers/MoviesProvider";
import MovieCard from "./MovieCard";

const Nominations = () => {
  const { nominations, removeNomination } = useContext(movieContext);

  return (
    <Paper>
      <Box p={3} minHeight="200px">
        <Typography gutterBottom variant="h6">
          Nominations
        </Typography>
        <Grid container spacing={2} direction="column">
          {nominations.map((nomination) => {
            return (
              <MovieCard
                key={nomination.imdbID}
                movie={nomination}
                button={"remove"}
                action={removeNomination}
              />
            );
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Nominations;
