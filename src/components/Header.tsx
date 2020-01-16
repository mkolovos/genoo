import React from "react";
import { Header as MuiHeader } from "mui-layout";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#1f2d43",
    color: "white",
    width: "100%"
  }
});

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiHeader className={classes.header}>
      <Typography variant="h4">Jokes</Typography>
    </MuiHeader>
  );
};

export default Header;
