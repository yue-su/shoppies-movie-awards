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
import { useSpring, a } from "react-spring";

const useStyles = makeStyles({
  card: {
    width: 300,
  },
  avatar: {
    width: 100,
    height: 150,
  },
});

const MovieCard = ({ movie, button, action }) => {
  const classes = useStyles();

  const lifting = useSpring({
    from: { transform: "translate3d(0,40px,50px)", opacity: 0 },
    transform: "translate3d(0,0px,0)",
    opacity: 1,
    delay: 300,
  });

  const { Poster, Title, Year, isNominated } = movie;

  return (
    <Grid item className="movieCard">
      <a.div style={lifting}>
        <Card className={classes.card} elevation={2}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Avatar
                variant="square"
                src={Poster}
                className={classes.avatar}
              />
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
                  color="primary"
                  disabled={isNominated ? isNominated : false}
                >
                  {button}
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </a.div>
    </Grid>
  );
};

export default MovieCard;
