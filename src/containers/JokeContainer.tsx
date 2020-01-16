import React, { useState, useCallback } from "react";
import { Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import { JokeForm, JokeList } from "../components/Joke";
import ProgressBtn from "../components/ProgressBtn";
import { getRandomJoke } from "../lib/jokeAPI";
import { JokeInterface } from "../types/joke";

const useStyles = makeStyles({
  JokeBoxContainer: {
    width: "80%",
    marginLeft: "10%",
    display: "inline-block"
  },
  scrollDiv: {
    overflow: "auto",
    height: "70vh"
  }
});

const JokeContainer: React.FC = () => {
  const classes = useStyles();
  const [jokes, setJokes] = useState<Array<JokeInterface>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const randomizeJoke = useCallback(async () => {
    setLoading(true);
    try {
      const newJokes = await getRandomJoke();
      setLoading(false);
      setError(false);
      setJokes(newJokes);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }, []);

  return (
    <div className={classes.JokeBoxContainer}>
      <Box display="flex" justifyContent="flex-start">
        <JokeForm setJokes={setJokes} setError={setError} />
        <ProgressBtn
          caption="Random"
          type="button"
          clickHandler={randomizeJoke}
          color="secondary"
          loading={loading}
        />
      </Box>
      {!!jokes.length && !error && <JokeList jokes={jokes} />}
      {!jokes.length && !error && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          There are no jokes to display. Go ahead and try form buttons above.
        </Alert>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          There was an error fetching data from server. Please retry!
        </Alert>
      )}
    </div>
  );
};

export default JokeContainer;
