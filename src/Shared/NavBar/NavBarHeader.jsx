import React from 'react';
 import { Link ,NavLink} from 'react-router-dom';
// import NavBarUL from './NavBarUL';
import About from '../../Pages/About/About';
import './NavBarHeader.css';
import {
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container
} from "@material-ui/core";
import { Home, PinDropSharp } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    //textTransform: `uppercase`,
    color: `white`
  },
  logo: {
         maxWidth: 160,
       },
});

const navLinks = [
  {title: `Home`, path: `/home`},
  { title: `About`, path: `/about-us`,component: About },
  { title: `Contact`, path: `/contact` },
  { title: `Team`, path: `/team` },
];

const NavBar = () => {
    const classes = useStyles();
    
    return (
      <AppBar position="static">
        <Toolbar>
        
          <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <img src="logo.png" alt="logo" className={classes.logo} />
            {/* <IconButton edge="start" color="inherit" aria-label="home">
              <Home fontSize="large" />
            </IconButton> */}
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <NavLink to={path} key={title} className={classes.linkText} >
                  <ListItem button
                            component={Link} to={path}>
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
