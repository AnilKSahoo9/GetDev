import React from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/Getdev (1).png";
// import NavBarUL from './NavBarUL';
// import About from "../../Pages/About/About";
// import ContainerDashboard from "../../Pages/ContainerDashboard/ContainerDashboard";

import "./NavBarHeader.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
// import { Home, PinDropSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
// import Team from "../../Pages/Team/Team";
// import Contact from "../../Pages/Contact/Contact";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    //textTransform: `uppercase`,
    color: `white`,
  },
  logo: {
    maxWidth: 10,
  },
});

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Contact Us`, path: `/contact-us` },
  { title: `Our Team`, path: `/ourteam` },
];
const afterLogin = [
  { title: `Dashboard`, path: `/dashboard` },
  { title: `Search Developers`, path: `/search` },
  { title: `User Profile`, path: `/userprofile` },
  { title: `Logout`, path: `/` },
];

const NavBar = () => {
  const classes = useStyles();
  // const location = useLocation();
  const history = useHistory();

  let path =
    history.location.pathname === "/dashboard" ||
    history.location.pathname === "/search" ||
    history.location.pathname === "/userprofile";

  return (
    <AppBar position="static" style={{ backgroundColor: "#006666" }}>
      <Toolbar>
        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <div
            //className={`logo`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
            onClick={() => {
              history.push("/");
            }}
          >
            <img
              src={logo}
              alt="GetDev"
              style={{
                height: "60px",
                width: "90px",
                cursor: "pointer",
              }}
            />
          </div>

          {/* <img src={logo} alt="GetDev" className={classes.logo} /> */}
          {/* <IconButton edge="start" color="inherit" aria-label="home">
              <Home fontSize="large" />
            </IconButton> */}
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <NavLink to={path} key={title} className={classes.linkText}>
                <ListItem button component={Link} to={path}>
                  <ListItemText primary={title} />
                </ListItem>
              </NavLink>
            ))}
            {/* {path && (
              <ListItem onClick={() => history.push("/")}>
                <ListItemText primary="SignOut" />
              </ListItem>
            )} */}
            {path &&
              afterLogin.map(({ title, path }) => (
                <NavLink to={path} key={title} className={classes.linkText}>
                  <ListItem button component={Link} to={path}>
                    <ListItemText primary={title} />
                  </ListItem>
                </NavLink>
              ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
  // return (
  //   <nav className="nav-wrapper blue-grey darken-4">
  //     <div className="container">
  //       <Link to="/" className="brand-logo"
  //         {/* <img src="https://www.freelogodesign.org/file/app/client/thumb/65a0ec75-9a2f-4040-900a-e3268d93a0fd_1000x600-watermark.png?20201107" width="190" height="65"/> */}
  //       GETDEV
  //       </Link>
  //       <NavBarUL />
  //     </div>
  //   </nav>
  // );
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   menuButton: {
  //     marginRight: theme.spacing(2),
  //   },
  //   title: {
  //     flexGrow: 1,
  //   },
  //   logo: {
  //     maxWidth: 160,
  //   },
  // }));
  // const classes = useStyles();
  // const handle = () => {
  //   alert('welcome')
  // }
  // const handle2 = () => {
  //   return(
  //     <NavLink to="/about">About</NavLink>
  //   );
  // }
  // return(
  //   <div className={classes.root}>
  //   <AppBar position="static" color="inherit">
  //     <Toolbar>
  //     <img src="logo.png" alt="logo" className={classes.logo} />
  //       <Typography variant="h6" className={classes.title}>
  //         News
  //       </Typography>
  //       <Button color="inherit" onClick={handle}>Home</Button>
  //       <Button color="inherit" onClick={handle2}>About</Button>
  //     </Toolbar>
  //   </AppBar>
  // </div>)
};
export default NavBar;
