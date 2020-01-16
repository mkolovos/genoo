import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  buttonWrapper: {
    margin: theme.spacing(1),
    position: "relative",
    display: "inline"
  },
  buttonProgress: {
    color: "white",
    position: "absolute",
    left: "50%",
    marginTop: 7,
    marginLeft: -12
  }
}));

interface ProgressBtnProps {
  caption: string;
  type: "submit" | "button";
  color: "default" | "inherit" | "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  clickHandler?: () => void;
}

const ProgressBtn: React.FC<ProgressBtnProps> = props => {
  const classes = useStyles();
  const { caption, color, type, loading, disabled, clickHandler } = props;
  return (
    <div className={classes.buttonWrapper}>
      <Button
        variant="contained"
        color={color}
        disabled={loading || disabled}
        type={type}
        onClick={clickHandler}
      >
        {caption}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

export default ProgressBtn;
