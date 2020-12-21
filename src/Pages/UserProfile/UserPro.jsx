import React, { useEffect, useState } from "react";
import axios from "axios";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
// import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Box from "@material-ui/core/Box";
//import { getUser } from "../../utils/common";
import Mahi from "../../assets/Mahi.jpg";
import Smriti from "../../assets/Smriti.jpg";

// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchData, removeData } from "../../redux/user.actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        GetDev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  // heroContent: {
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(8, 0, 6),
  // },
  // heroButtons: {
  //   marginTop: theme.spacing(4),
  // },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    //height: 300,
    width: 1300,
  },
  card: {
    height: "300px",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: "250px",
  },
  cardContent: {
    flexGrow: 1,
  },
  typography: {
    fontWeight: "bold",
  },
}));

// const cards = [1];

export default function UserProfile(props) {
  const classes = useStyles();
  // const { fetchData } = props;
  const { userId } = useSelector((state) => state.fetchUserData);
  // const location = useLocation();
  const [data, setData] = useState(null);
  console.log(userId);
  const data1 = {
    //image: "hii",
    // name: "Ankur Malhotra",
    // emailId: "ankur@gmail.com",
    // gender: "Male",
    // bio: "Plant Lover,Bibliophile",
    // location: "Bhadrak,Odisha,India",
    // workProfile: "Frontend Developer",
    // githubUrl: "www.github.com/ankur",
    // linkedinUrl: "www.linkedin.com/ankur",
    // skills: ["Java", "JavaScript", "PHP", "MySQL", "Python", "C", "C++"],
    project: [
      {
        projectName: "GetDev",
        projectDesc: "where developers meet",
      },
    ],
  };
  // // const user = getUser();
  // console.log(user);
  useEffect(() => {
    const fetchUserDetails = () => {
      axios
        .get(
          `http://localhost:4000/api/users/${userId}`
          //JSON.stringify(payload),
          // userId
        )
        .then((res) => {
          console.log(res.data.userDetails);
          res.data.userDetails ? setData(res.data.userDetails) : setData(null);
        })
        .catch((err) => console.log(err));
    };
    userId && fetchUserDetails();
  }, [userId]);
  return data ? (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={
                    Mahi
                    // data.gender === "male"
                    //   ? Mahi
                    //   : data.gender === "female"
                    //   ? Smriti
                    //   : null
                  }
                  title={data.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.typography}
                  >
                    {data.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="left"
                    className={classes.typography}
                  >
                    Basic Details
                  </Typography>
                  <Table size="medium">
                    <TableHead></TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Email Id</TableCell>
                        <TableCell>{data.email}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Gender</TableCell>
                        <TableCell>{data.gender}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Bio</TableCell>
                        <TableCell>{data.bio}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Location</TableCell>
                        <TableCell>{data.location}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    align="left"
                    className={classes.typography}
                  >
                    Tech Details
                  </Typography>
                  <Table size="medium">
                    <TableHead></TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Work Profile</TableCell>
                        <TableCell>{data.work_profile}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>GitHub</TableCell>
                        <TableCell>{data.github}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>LinkedIn</TableCell>
                        <TableCell>{data.linkedin}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Skills</TableCell>
                        <TableCell>{data.skill}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
            {/* {cards.map((card) => ( */}
            {data.project ? (
              <Grid item xs={12}>
                <Card className={classes.card} style={{ height: "300px" }}>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      align="left"
                      className={classes.typography}
                    >
                      Project Details
                    </Typography>
                    <Table size="medium">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Description</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {data.projects.map((row) => ( */}
                        <TableRow key={data1.project[0].projectName}>
                          <TableCell>{data1.project[0].projectName}</TableCell>
                          <TableCell>{data1.project[0].projectDesc}</TableCell>
                        </TableRow>
                        {/* ))} */}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </Grid>
            ) : null}
            {/* ))} */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  ) : null;
}
