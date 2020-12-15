import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
//import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";

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
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    minWidth: 700,
    //marginLeft: theme.spacing(30),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 340,
    //maxWidth: 300,
  },
  gender: {
    margin: theme.spacing(1),
    minWidth: 340,
    marginLeft: 0,
  },
  work: {
    //margin: theme.spacing(0),
    minWidth: 340,
    marginLeft: 0,
    marginTop: 8,
  },
  input: {
    textIndent: theme.spacing(2),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skills = [
  "C",
  "C++",
  "Java",
  "JavaScript",
  "PHP",
  "SQL",
  "MySQL",
  "MsSQL",
  "MongoDB",
  "Cassendra",
  "Python",
  "Go",
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "React.js",
  "Angular.js",
];

function getStyles(name, skill, theme) {
  return {
    fontWeight: 10,
    // skill.indexOf(name) === -1
    //   ? theme.typography.fontWeightRegular
    //   : theme.typography.fontWeightMedium,
  };
}

export default function SignUp(props) {
  const classes = useStyles();
  const [skill, setSkill] = useState([]);
  const theme = useTheme();
  const [addProject, setAddProject] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    //age: "",
    gender: "",
    work_profile: "",
    bio: "",
    location: "",
    github: "",
    linkedin: "",
    password: "",
  });
  const [project, setProject] = useState({
    projectName: "",
    projectDesc: "",
  });

  const inputHandler = useCallback((event) => {
    event.persist();
    let name = event.target.name;
    let value = event.target.value;
    //console.log(event.target.value);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  const handleProjectChange =
    //useCallback(
    (event) => {
      event.persist();
      let name = event.target.name;
      let value = event.target.value;
      setProject((prev) => ({
        ...prev,
        [name]: value,
      }));
      //setProject((prev) => [...prev, { ...prev[0], [name]: value }]);
      //   {
      //   ...prev,
      //   [name]: value,
      // }));
      //let finalForm = {};

      //console.log(form);
      // for (let x in form) {
      //   finalForm[x] = form[x];
      // }
    };
  //   [form, project, skill]
  // );

  const submitHandler = (event) => {
    //useCallback(() => {
    form.skill = skill;
    form.project = project;
    event.preventDefault();
    //alert("clicked");
    // if (Object.values(finalForm).includes(null)) {
    //   alert("missed");
    //   // finalForm = form;
    //   // console.log(finalForm);
    // } else {
    //alert("success");
    //console.log(form);

    axios
      .post(`http://localhost:4000/api/users/signup`, form, {
        header: {
          "Content-type":
            "application/json,application/x-www-form-urlencoded, charset=UTF-8",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.request.status === 201) {
          Swal.fire({
            icon: "success",
            title: "",
            text: "User registered successfully",
            showConfirmButton: false,
            timer: 2000,
          });
          //.then(() => (window.location = "/login"));
        }
        //alert("success");
        // if(res.status === 201){
        //   props.history.push("/signup");
        // }
        // else if(res.status === 500){
        //   alert(" user already exists");
        // }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.request.status === 202) {
          //alert("Account with this email already exists.");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Signing up failed, please try again later",
          });
        }
        if (err.response.request.status === 422) {
          //alert("Account with this email already exists.");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User already exists, please Sign In instead",
          });
        }
        if (err.response.request.status === 500) {
          //alert("Account with this email already exists.");
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Can't create the account, try again after some time",
          });
        }
      });
  };

  //console.log(skill);
  //}, [form, skill, project]);

  const handleProject = () => {
    setAddProject(true);
  };
  useEffect(() => {
    !addProject && setAddProject(false);
  }, [addProject]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                type="name"
                variant="outlined"
                required
                fullWidth
                id="fullName"
                label="Full Name"
                autoFocus
                className={classes.input}
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={inputHandler}
              />
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                type="number"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={inputHandler}
              />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.gender}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Gender
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  //value={form.workProfile}
                  //onChange={handleChange}
                  label="Gender"
                  onChange={inputHandler}
                  name="gender"
                  //fullWidth
                >
                  {/* <MenuItem value=""><em>None</em></MenuItem> */}
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.work}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Work Profile
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  //value={form.workProfile}
                  //onChange={handleChange}
                  label="Work Profile"
                  onChange={inputHandler}
                  name="work_profile"
                  //fullWidth
                >
                  {/* <MenuItem value=""><em>None</em></MenuItem> */}
                  <MenuItem
                    value="Full Stack Developer"
                    onChange={inputHandler}
                  >
                    Full Stack Developer
                  </MenuItem>
                  <MenuItem value="Frontend Developer">
                    Frontend Developer
                  </MenuItem>
                  <MenuItem value="Backend Developer">
                    Backend Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                type="text"
                label="Location"
                name="location"
                autoComplete="location"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bio"
                type="text"
                label="Enter Bio"
                name="bio"
                autoComplete="bio"
                onChange={inputHandler}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="github"
                type="text"
                label="GitHub Url"
                name="github"
                autoComplete="github"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="linkedin"
                type="text"
                label="LinkedIn Url"
                name="linkedin"
                autoComplete="linkedin"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={inputHandler}
              />
            </Grid>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                id="demo-simple-select-outlined-label"
                // ref={(ref) => {
                //   InputLabelRef = ref;
                // }}
              >
                Skills
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={skill}
                onChange={handleSkillChange}
                label="Skills"
                multiple
                required
                name="skill"
                // fullWidth
                input={
                  <OutlinedInput labelWidth={50} name="members" id="members" />
                }
                MenuProps={MenuProps}
              >
                {skills.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, skill, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {addProject && (
              <div className={classes.formControl}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      //fullWidth
                      id="projectName"
                      label="Project Name"
                      name="projectName"
                      type="text"
                      autoComplete="projectName"
                      style={{ width: "342px" }}
                      onChange={handleProjectChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      //fullWidth
                      id="projectDesc"
                      label="Project Description"
                      name="projectDesc"
                      type="text"
                      autoComplete="projectDesc"
                      style={{ width: "342px" }}
                      onChange={handleProjectChange}
                    />
                  </Grid>
                </Grid>
              </div>
            )}
            <Button
              //type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={handleProject}
            >
              <AddIcon /> Add Projects
            </Button>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
          </Grid>
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //onSubmit={submitHandler}
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { setUserSession } from '../../utils/common';
// const Signup = (props) => {
//   const history = useHistory();
//   const [state, setState] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//   });
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     sendDetailsToServer();
//   };

//   const sendDetailsToServer = () => {
//     const payload = {
//       email: state.email,
//       password: state.password,
//       firstName: state.firstName,
//       lastName: state.lastName,
//     };
//     redirectToDashboard();
//     // axios
//     //   .post(API_BASE_URL + '/user/login', payload)
//     //   .then((response) => {
//     //     setUserSession(response.data.token, response.data.user);
//     //   })
//     //   .catch((error) => {
//     //     setState((prevState) => {
//     //       return {
//     //         ...prevState,
//     //         error: 'Something went wrong. Please try again later.',
//     //       };
//     //     });
//     //     console.log(error);
//     //   });
//   };

//   const redirectToDashboard = () => {
//     history.push('/Dashboard');
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="white">
//         <div className="input-field">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="password">password</label>
//           <input type="password" id="password" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="firstName">firstName</label>
//           <input type="text" id="firstName" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="lastName">lastName</label>
//           <input type="text" id="lastName" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Signup;
