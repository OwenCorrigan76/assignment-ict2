// this is for the layout of the tv info page

import React from "react";
import TvHeader from "../headerTv";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getTvImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
    background: "white",
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: "100vh",
  },
}));

const TemplateTvPage = ({ tv, children }) => {
  const classes = useStyles();
  const { error, isLoading, isError } = useQuery(
    ["images", { id: tv.id }],
    getTvImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div className={classes.root}>
        <TvHeader tv={tv} />
        <Grid container spacing={5} style={{ padding: "15px" }}>
          <Grid item xs={2}>
            <div className={classes.imageListRoot}>
              <ImageList rowHeight={500} className={classes.gridList} cols={1}>
                {tv.seasons.map((s) => (
                  <ImageListItem key={s.poster_path} cols={1}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${s.poster_path}`}
                      alt={s.poster_path}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TemplateTvPage;
