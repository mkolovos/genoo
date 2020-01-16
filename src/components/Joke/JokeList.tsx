import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Link,
  Avatar
} from "@material-ui/core";
import { JokeInterface, JokeList } from "../../types/joke";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      overflow: "auto",
      height: "60vh"
    }
  })
);

const JokeBox: React.FC<JokeList> = props => {
  const classes = useStyles();
  const { jokes } = props;

  return (
    <List dense className={classes.root}>
      {jokes.map((joke: JokeInterface, index: number) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <ListItem key={index} button>
            <ListItemAvatar>
              <Link href={joke.url}>
                <Avatar src={joke.icon_url} />
              </Link>
            </ListItemAvatar>
            <ListItemText id={labelId} primary={joke.value} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default JokeBox;
