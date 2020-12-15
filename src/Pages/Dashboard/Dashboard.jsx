import React from "react";
// import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import NotificationsIcon from "@material-ui/icons/Notifications";
//import { mainListItems, secondaryListItems } from "./listItems";
//import Chart from "./Chart";
//import Deposits from "./Deposits";
import UserList from "./UserList";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        GetDev{" "}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    //margin: theme.spacing(0),
  },
  // toolbar: {
  //   paddingRight: 24, // keep right padding when drawer closed
  // },
  // toolbarIcon: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: "0 8px",
  //   ...theme.mixins.toolbar,
  // },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // appBarShift: {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // menuButton: {
  //   marginRight: 36,
  // },
  // menuButtonHidden: {
  //   display: "none",
  // },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  // drawerPaper: {
  //   position: "relative",
  //   whiteSpace: "nowrap",
  //   width: drawerWidth,
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: "hidden",
  //   transition: theme.transitions.create("width", {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(7),
  //   [theme.breakpoints.up("sm")]: {
  //     width: theme.spacing(9),
  //   },
  // },
  appBarSpacer: theme.spacing(1),
  content: {
    flexGrow: 1,
    height: "100vh",
    //overflow: "auto",
  },
  container: {
    //paddingTop: theme.spacing(1),
    //paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    //overflow: "auto",
    flexDirection: "column",
  },
  // fixedHeight: {
  //   height: 240,
  // },
}));

export default function Dashboard() {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(true);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar> */}
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div> */}
      {/* <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List> */}
      {/* </Drawer> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}
            {/* Recent Deposits */}
            {/* <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12} sm={4}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Sent Requests
              </Typography>
              <Paper className={classes.paper}>
                <UserList />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Accept Requests
              </Typography>
              <Paper className={classes.paper}>
                <UserList isAcceptSection={true} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Chit-Chat
              </Typography>
              <Paper className={classes.paper}>
                <UserList isChatSection={true} />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

// //import axios from "axios";
// import React, { useState, useEffect } from "react";
// //import { Container, Row, Col } from "reactstrap";
// import UserList from "../../Shared/User/UserList";
// //import { getUser } from "../../utils/common";
// //import "./Dashboard.css";
// //export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;

// const users = [
//   {
//     id: 1,
//     name: "Anil",
//     image: "D:PhotosHomeMeIMG_0987",
//   },
//   {
//     id: 2,
//     name: "Ankur",
//     image: "D:PhotosHomeMeIMG_0987",
//   },
//   {
//     id: 3,
//     name: "Himanshu",
//     image: "D:PhotosHomeMeIMG_0987",
//   },
// ];

// const Dashboard = () => {
//   // const [reqUser, setReqUser] = useState(null);
//   // const [acceptUser, setAcceptUser] = useState(null);
//   // const emailId = getUser();

//   // useEffect(() => {
//   //   const fetchData = () => {
//   //     axios
//   //       .get(API_BASE_URL + "/user/login", { userId: emailId })
//   //       .then((res) => {
//   //         setReqUser(res.data.reuest_section);
//   //         setAcceptUser(res.data.accept_section);
//   //       })
//   //       .catch((err) => console.log(err));
//   //   };
//   //   emailId && fetchData();
//   // }, [emailId]);

//   return (
//     <div className="main-container">
//       <div className="request-section">
//         <span
//           style={{ marginLeft: "450px", fontSize: "20px", fontWeight: "bold" }}
//         >
//           User's Request Section
//         </span>
//         <UserList item={users} />
//       </div>
//       <div className="accept-section">
//         <span style={{ fontSize: "20px", fontWeight: "bold" }}>
//           User's Accept Section
//         </span>
//         <UserList item={users} isAcceptSection={true} />
//       </div>
//       <div className="chat-section"></div>
//     </div>
//   );
// };

// export default Dashboard;
