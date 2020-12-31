import React, { useContext } from "react";
import {
  Paper,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { movieContext } from "../providers/MoviesProvider";

const Results = () => {
  const { movies } = useContext(movieContext);

  return (
    <Paper>
      <Box p={3} minHeight="200px">
        <Typography variant="h6">Results for</Typography>

        <Grid container spacing={1}>
          {movies.map((movie) => {
            return (
              <Grid item md={6} key={movie.imdbID}>
                <Card>
                  <Grid container>
                    <Grid item md={6}>
                      <CardMedia component="img" src={movie.Poster} />
                    </Grid>
                    <Grid item md={6}>
                      <CardContent>
                        <Typography variant="subtitle2">
                          {movie.Year}
                        </Typography>
                        <Typography variant="subtitle2">
                          {movie.Title}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Results;
