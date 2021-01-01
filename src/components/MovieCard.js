import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  avatar: {
    width: 100,
    height: 150,
  },
});

const MovieCard = ({ movie, button, action }) => {
  const classes = useStyles();

  const { Poster, Title, Year, isNominated } = movie;

  return (
    <Grid item>
      <Card>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Avatar variant="square" src={Poster} className={classes.avatar} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md={8}
            justify="space-between"
          >
            <CardContent>
              <Typography variant="subtitle2" align="right">
                {Title}
              </Typography>
              <Typography variant="subtitle2" align="right">
                ({Year})
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                onClick={() => action(movie)}
                fullWidth
                variant="outlined"
                disabled={isNominated ? isNominated : false}
              >
                {button}
              </Button>
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default MovieCard;
