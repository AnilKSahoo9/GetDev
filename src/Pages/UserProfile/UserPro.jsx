import React from "react";
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

import Mahi from "../../assets/Mahi.jpg";
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

export default function User() {
  const classes = useStyles();
  const data = {
    //image: "hii",
    name: "Ankur Malhotra",
    emailId: "ankur@gmail.com",
    gender: "Male",
    bio: "Plant Lover,Bibliophile",
    location: "Bhadrak,Odisha,India",
    workProfile: "Frontend Developer",
    githubUrl: "www.github.com/ankur",
    linkedinUrl: "www.linkedin.com/ankur",
    skills: ["Java", "JavaScript", "PHP", "MySQL", "Python", "C", "C++"],
    projects: [
      {
        name: "Fitness Tracking and Visualisation System",
        description:
          "This project is basically for fitness enthusiastic persons. Who loves to stay fit and healthy",
      },
      {
        name: "Blood Donor Finder",
        description:
          "This a android project in which we can find different blood donors details by using respective blood group and location",
      },
    ],
  };

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={Mahi}
                  title="Image title"
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
                        <TableCell>{data.emailId}</TableCell>
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
                        <TableCell>{data.workProfile}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>GitHub</TableCell>
                        <TableCell>{data.githubUrl}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>LinkedIn</TableCell>
                        <TableCell>{data.linkedinUrl}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Skills</TableCell>
                        <TableCell>{data.skills.join(", ")}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
            {/* {cards.map((card) => ( */}
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
                      {data.projects.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.description}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Grid>
            {/* ))} */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </React.Fragment>
  );
}
