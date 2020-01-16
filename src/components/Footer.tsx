import React from "react";
import { Footer as MuiFooter } from "mui-layout";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#1f2d43",
    color: "white",
    position: "absolute",
    bottom: "0px",
    width: "100%"
  }
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiFooter className={classes.footer}>
      <Typography variant="h6" align="center">
        By Michael Kolovos
      </Typography>
    </MuiFooter>
  );
};

export default Footer;
