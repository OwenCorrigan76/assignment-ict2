// this looks after the navigation header

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appbar: {
    color: "black",
    padding: theme.spacing(0.5),
    background: "purple",
  },
  inactiveLink: {
    color: "white",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
  },
  activeLink: {
    color: "purple",
    padding: theme.spacing(1),
    fontSize: "1.5rem",
    background: "white",
  },
}));

const SiteHeader = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const open = Boolean(anchorEl);
  const menuOptions = [
    { label: "Home", path: "/homePage" },
    { label: "Favourites", path: "/movies/favourites" },
    { label: "Favourites Tv", path: "/tvShows/favourites" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "Top Rated", path: "/movies/top_rated" },
    { label: "Popular Actors", path: "/person/popular" },
    { label: "Tv Shows", path: "/tvShows/tv" },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        className={classes.appbar}
        position="fixed"
        elevation={10}
        color="primary"
      >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Owen Corrigan Movie App!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <NavLink
                  key={opt.label}
                  to={opt.path}
                  className={({ isActive }) =>
                    isActive ? classes.activeLink : classes.inactiveLink
                  }
                  color="inherit"
                >
                  {opt.label}
                </NavLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SiteHeader;
