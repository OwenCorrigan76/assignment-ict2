import React from "react";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { Link } from "react-router-dom";

const WriteReviewIcon = ({ movie }) => {
  return (
    <Link
<<<<<<< HEAD
      to={"/reviews/form"}
      state={{
        movieId: movie.id,
      }}
=======
      to={'/reviews/form'}
      state={{
          movieId: movie.id,
        }}
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

<<<<<<< HEAD
export default WriteReviewIcon;
=======
export default WriteReviewIcon;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218