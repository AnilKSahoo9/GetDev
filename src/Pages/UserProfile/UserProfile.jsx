// //import { render } from "@testing-library/react";
// import React from "react";
// //import EditProfile from "./EditProfile";
// import "./UserProfile.css";
// import image from "../../assets/Mahi.jpg";
// import { Container, Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     minWidth: 200,
//     marginTop: theme.spacing(5),
//     marginLeft: theme.spacing(2),
//   },
//   nameImage: {
//     minWidth: 300,
//   },
//   media: {
//     height: 250,
//   },
//   // basicDetails: {
//   //   minWidth: 500,
//   // },
// }));
// const UserProfile = () => {
//   const classes = useStyles();

//   const data = {
//     //image: "hii",
//     name: "Ankur Malhotra",
//     emailId: "ankur@gmail.com",
//     gender: "Male",
//     bio: "Plant Lover,Bibliophile",
//     location: "Bhadrak,Odisha,India",
//     workProfile: "Frontend Developer",
//     githubUrl: "www.github.com/ankur",
//     linkedinUrl: "www.linkedin.com/ankur",
//     skills: ["Java", "JavaScript", "PHP", "MySQL", "Python", "C", "C++"],
//     projects: [
//       {
//         name: "Fitness Tracking and Visualisation System",
//         description:
//           "This project is basically for fitness enthusiastic persons. Who loves to stay fit and healthy",
//       },
//       {
//         name: "Blood Donor Finder",
//         description:
//           "This a android project in which we can find different blood donors details by using respective blood group and location",
//       },
//     ],
//   };

//   //   const handleOnClick = () => {
//   //     // return (
//   //     //   <div>
//   //     //     alert("Edit button clicked");
//   //     //     {/* <EditProfile />; */}
//   //     //     {/* <h4>Hii</h4> */}
//   //     //   </div>
//   //     // );
//   //     //{ <EditProfile /> }
//   //     //alert("Edit button clicked");
//   //     //return console.log("Hii");
//   //   };

//   return (
//     <Container maxWidth="xs">
//       <Grid container spacing={4}>
//         <Grid xs={12} sm={6} className={classes.root}>
//           <Card className={classes.nameImage}>
//             {/* <CardActionArea> */}
//             <CardMedia
//               className={classes.media}
//               image="https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
//               title="Contemplative Reptile"
//             />
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {data.name}
//               </Typography>
//               {/* <Typography variant="body2" color="textPrimary" component="p">
//                   {data.bio}
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.gender}
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.emailId}
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.location}
//                 </Typography> */}
//             </CardContent>
//             {/* </CardActionArea> */}
//             {/* <CardActions>
//               <Button size="small" color="primary">
//                 Edit
//               </Button>
//               <Button size="small" color="primary">
//                 Learn More
//               </Button>
//             </CardActions> */}
//           </Card>
//         </Grid>
//         <Grid xs={12} sm={6} className={classes.root}>
//           <Card>
//             <CardActionArea>
//               {/* <CardMedia
//                 className={classes.media}
//                 image="https://cdn.siasat.com/wp-content/uploads/2020/12/ms-dhoni-ed.jpg"
//                 title="Contemplative Reptile"
//               /> */}
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                   Tech Details
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.workProfile}
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.githubUrl}
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.linkedinUrl}
//                 </Typography>
//                 <Typography variant="body2" color="textPrimary" component="p">
//                   {data.skills.map((item) => (
//                     <li className="list"> {item} </li>
//                   ))}{" "}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//     // <div className="user-section">
//     //   <div className="user-card">
//     //     <div className="user-image">
//     //       <img className="image" src={image} alt={data.name} />
//     //     </div>
//     //     <span className="heading">{data.name}</span>
//     //   </div>
//     //   <div className="user-card">
//     //     <div className="info">
//     //       <span style={{ fontSize: "30px" }}>
//     //         {" "}
//     //         <u>Basic Details</u>{" "}
//     //       </span>
//     //       <br />
//     //       <span> Email Id: {data.emailId} </span>
//     //       <br />
//     //       <span> Gender: {data.gender} </span>
//     //       <br />
//     //       <span> Bio: {data.bio} </span>
//     //       <br />
//     //       <span> Location: {data.location} </span>
//     //     </div>
//     //   </div>
//     //   <div className="user-card">
//     //     <div className="info">
//     //       <span style={{ fontSize: "30px" }}>
//     //         {" "}
//     //         <u>Tech Details</u>{" "}
//     //       </span>
//     //       <br />
//     //       <span> Work Profile: {data.workProfile} </span>
//     //       <br />
//     //       <span> GitHub: {data.githubUrl} </span>
//     //       <br />
//     //       <span> LinkedIn: {data.linkedinUrl} </span>
//     //       <br />
//     //       <span> Skills: </span>
//     //       {data.skills.map((item) => (
//     //         <li className="list"> {item} </li>
//     //       ))}
//     //     </div>
//     //   </div>
//     //   <div className="user-card">
//     //     <div className="info">
//     //       <span style={{ fontSize: "30px" }}>
//     //         {" "}
//     //         <u>Projects</u>{" "}
//     //       </span>
//     //       {data.projects.map((item) => (
//     //         <div>
//     //           <li id="list"> {item.name} </li>
//     //           <ul id="description">{item.description}</ul>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   </div>
//     //   {/* <div className="user-detiails">
//     //     <div className="basic-user-details">
//     //       <h5> Name: {data.name} </h5>
//     //       <h5> Email Id: {data.emailId} </h5>
//     //       <h5> Gender: {data.gender} </h5>
//     //       <h5> Bio: {data.bio} </h5>
//     //       <h5> Location: {data.location} </h5>
//     //     </div>
//     //     <div className="work-user-details">
//     //       <h5> Work Profile: {data.workProfile} </h5>{" "}
//     //       <h5> GitHub: {data.githubUrl} </h5>{" "}
//     //       <h5> LinkedIn: {data.linkedinUrl} </h5> <h5> Skills: </h5>{" "}
//     //       {data.skills.map((item) => (
//     //         <li> {item} </li>
//     //       ))}{" "}
//     //       <h5> Projects Done: </h5>{" "}
//     //       {data.projects.map((item) => (
//     //         <li> {item.name} </li>
//     //       ))}{" "}
//     //     </div>{" "}
//     //   </div>{" "} */}
//     // </div>
//   );
// };

// export default UserProfile;
