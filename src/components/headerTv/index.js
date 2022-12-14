import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
    backgroundColor: "rgb(255, 95, 0)",
    color: "white",
    marginLeft: 0,
  },
  tagLine: {
    fontSize: "1.5rem",
  },
}));

const TvHeader = (props) => {
  const classes = useStyles();
  const tv = props.tv;

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {tv.title}
        <a href={tv.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span className={classes.tagLine}>{`   "${tv.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default TvHeader;
