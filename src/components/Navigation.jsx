/* eslint-disable react/prop-types */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { useContext, useState } from "react";
import { userContext } from "./UserContext";
import { Login, Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import TopicMenu from "./TopicsMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
2;
export default function NavBar({ setSort }) {
  const { user, setUser } = useContext(userContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogin = (user) => {
    if (user === undefined) {
      setUser("tickle122");
    }
    if (typeof user === "string") {
      setUser(undefined);
    }
  };

  function Logged({ user }) {
    if (user === undefined) {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={() => {
              handleLogin(user);
            }}
            color="inherit"
          >
            <Login />
          </IconButton>
        </Box>
      );
    }
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{
            mr: 1,
            display: { md: "flex", xs: "none" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          Welcome {user}!
        </Typography>
        <IconButton
          aria-label="Login/Logout button"
          onClick={() => {
            handleLogin(user);
          }}
          sx={{ color: "white" }}
        >
          <Logout />
        </IconButton>
      </Box>
    );
  }
  return (
    <>
      <TopicMenu open={open} setOpen={setOpen} setSort={setSort} />
      <Box sx={{ flexGrow: 1, margin: "5rem" }}>
        <AppBar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, display: { md: "none", xs: "flex" } }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton aria-label="home button" href="/" color="white">
              <AdbIcon
                a="/"
                sx={{
                  display: { xs: "flex", md: "flex" },
                  mr: 1,
                  color: "white",
                }}
              />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                NC-News
              </Typography>
            </IconButton>
          </Toolbar>
          <Search
            sx={{
              margin: "1rem",
              display: { md: "flex", xs: "flex" },
              alignItems: "center",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Logged user={user} />
        </AppBar>
      </Box>
    </>
  );
}
