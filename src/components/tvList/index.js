// map over tv shows and return array of shows
import React from "react";
import Tv from "../tvCard";
import Grid from "@material-ui/core/Grid";

const TvList = ({ tvShows, action }) => {
  let tvCards = tvShows.map((t) => (
    <Grid key={t.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Tv key={t.id} tv={t} action={action} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;
