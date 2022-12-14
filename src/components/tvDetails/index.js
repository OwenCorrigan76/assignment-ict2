import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import TvReviews from "../tvReviews";

const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
    background: "black",
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
}));

const TvDetails = ({ tv }) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false); // New

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>
      <Typography variant="h6" component="p">
        {tv.overview}
      </Typography>
      <div className={classes.chipRoot}>
        <Paper component="ul" className={classes.chipSet}>
          <li>
            <Chip
              label="Genres"
              className={classes.chipLabel}
              color="primary"
            />
          </li>
          {tv.genres.map((t) => (
            <li key={t.name}>
              <Chip label={t.name} className={classes.chip} />
            </li>
          ))}
        </Paper>
        <Paper component="ul" className={classes.chipSet}>
          <Chip
            icon={<AccessTimeIcon />}
            label={`${tv.episode_run_time} min.`}
          />
          <Chip label={`Released: ${tv.first_air_date}`} />
        </Paper>
      </div>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        <NavigationIcon />
        Click for Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <TvReviews tv={tv} />
      </Drawer>
    </>
  );
};
export default TvDetails;
