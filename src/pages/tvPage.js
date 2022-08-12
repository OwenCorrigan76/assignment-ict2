import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { getTv } from "../api/tmdb-api"; // new import from api page
// import MustWatchIcon from '../components/cardIcons/mustWatch'

const NewTvPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "tvShows",
    getTv
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const tvShows = data.results;

  return (
    <PageTemplate
      title="Discover Tv"
      tvShows={tvShows}
      action={(tv) => {
      }}
    />
  );
};

export default NewTvPage;