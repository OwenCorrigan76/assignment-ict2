import React from "react";
import TvCard from "../components/tvCard";
import SampleTv from "./sampleData";
import { MemoryRouter } from "react-router";
import TvShowsContextProvider from "../contexts/tvShowsContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Home Page/TvCard",
  component: TvCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TvCard
      tv={SampleTv}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTv, poster_path: undefined };
  return (
    <TvCard
    tv={sampleNoPoster}
      action={(tv) => <AddToFavoritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";
