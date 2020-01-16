import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import classNames from "classnames";
import { getRandomJoke, queryJoke, getCategories } from "../../lib/jokeAPI";
import ProgressBtn from "../ProgressBtn";
import { JokeInterface } from "../../types/joke";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    form: {
      marginTop: "8px"
    },
    select: {
      marginTop: "-8px"
    }
  })
);

interface JokeFormProps {
  setJokes: (jokes: Array<JokeInterface>) => void;
  setError: (error: boolean) => void;
}

const JokeForm: React.FC<JokeFormProps> = props => {
  const classes = useStyles();
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");
  const [categoryList, setCategoryList] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);
  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCategory(event.target.value as string);
    setQuery("");
  };
  const handleQueryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuery(event.target.value as string);
    setCategory("");
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    let newJokes: Array<JokeInterface>;
    const { setJokes } = props;
    const { setError } = props;

    event.preventDefault();
    setLoading(true);
    try {
      if (category) {
        newJokes = await getRandomJoke(category);
      } else {
        newJokes = await queryJoke(query);
      }
      setLoading(false);
      setError(false);
      setJokes(newJokes);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    const setCategoryListWrapper = async () => {
      setCategoryList(await getCategories());
    };
    setCategoryListWrapper();
  }, []);
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl
        className={classNames({
          [classes.formControl]: true,
          [classes.select]: true
        })}
      >
        <InputLabel id="categories-label">category</InputLabel>
        <Select
          labelId="categories-label"
          id="categories-select"
          value={category}
          onChange={handleCategoryChange}
        >
          {categoryList.map((category, index) => (
            <MenuItem value={category} key={index}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <TextField value={query} onChange={handleQueryChange} />
      </FormControl>
      <ProgressBtn
        type="submit"
        caption="GET"
        color="primary"
        loading={loading}
        disabled={!category && !query}
      />
    </form>
  );
};

export default JokeForm;
