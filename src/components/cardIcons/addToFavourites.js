import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
<<<<<<< HEAD

=======
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };
<<<<<<< HEAD
=======
  
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

<<<<<<< HEAD
export default AddToFavouritesIcon;
=======
export default AddToFavouritesIcon;
>>>>>>> f3c31fc2c6d054b86a1beec08a9e84b185ccf218
