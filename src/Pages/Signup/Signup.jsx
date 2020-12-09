import React, { useState, useEffect, useCallback } from "react";
//import ReactDOM from "react-dom";
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
      <Link color="inherit" href="https://material-ui.com/">
        GetDev
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    minWidth: 395,
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
    minWidth: 395,
    //maxWidth: 300,
  },
  work: {
    //margin: theme.spacing(0),
    minWidth: 190,
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
  "",
];

function getStyles(name, skill, theme) {
  return {
    fontWeight: 10,
    // skill.indexOf(name) === -1
    //   ? theme.typography.fontWeightRegular
    //   : theme.typography.fontWeightMedium,
  };
}

export default function SignUp() {
  const classes = useStyles();
  const [skill, setSkill] = useState([]);
  const theme = useTheme();
  const [addProject, setAddProject] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    workProfile: "",
    bio: "",
    location: "",
    github: "",
    linkedin: "",
    password: "",
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

  const handleChange = (event) => {
    setSkill(event.target.value);
  };

  // useEffect(() => {
  //   setAddProject(false);
  // const addProjectFunc = () => {
  //   return (
  //     <div className={classes.form}>
  //       <Grid container spacing={2}>
  //         <Grid item xs={12}>
  //           <TextField
  //             variant="outlined"
  //             required
  //             //fullWidth
  //             id="projectName"
  //             label="Project Name"
  //             name="projectName"
  //             autoComplete="projectName"
  //             style={{ width: "395px" }}
  //           />
  //         </Grid>
  //         <Grid item xs={12}>
  //           <TextField
  //             variant="outlined"
  //             required
  //             //fullWidth
  //             id="projectDesc"
  //             label="Project Description"
  //             name="projectDesc"
  //             autoComplete="projectDesc"
  //             style={{ width: "395px" }}
  //           />
  //         </Grid>
  //       </Grid>
  //     </div>
  //   );
  // };
  //   addProjectFunc();
  // }, []);
  const submitHandler = useCallback(() => {
    let finalForm = {};
    form.skills = skill;
    for (let x in form) {
      finalForm[x] = form[x];
    }
    if (Object.values(finalForm).includes(null)) {
      alert("missed");
      // finalForm = form;
      // console.log(finalForm);
    } else {
      alert("success");
      console.log(finalForm);
    }

    //console.log(skill);
  }, [form, skill]);

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
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                autoComplete="age"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" className={classes.work}>
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
                  name="workProfile"
                  //fullWidth
                >
                  {/* <MenuItem value=""><em>None</em></MenuItem> */}
                  <MenuItem value={"Full Stack Developer"}>
                    Full Stack Developer
                  </MenuItem>
                  <MenuItem value={"Frontend Developer"}>
                    Frontend Developer
                  </MenuItem>
                  <MenuItem value={"Backend Developer"}>
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
                label="Location"
                name="location"
                autoComplete="location"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="bio"
                label="Enter Bio"
                name="bio"
                autoComplete="bio"
                onChange={inputHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="github"
                label="GitHub Url"
                name="github"
                autoComplete="github"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="linkedin"
                label="LinkedIn Url"
                name="linkedin"
                autoComplete="linkedin"
                onChange={inputHandler}
              />
            </Grid>
            <Grid item xs={12}>
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
                onChange={handleChange}
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
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    //fullWidth
                    id="projectName"
                    label="Project Name"
                    name="projectName"
                    autoComplete="projectName"
                    style={{ width: "395px" }}
                    onChange={inputHandler}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    //fullWidth
                    id="projectDesc"
                    label="Project Description"
                    name="projectDesc"
                    autoComplete="projectDesc"
                    style={{ width: "395px" }}
                    onChange={inputHandler}
                  />
                </Grid>
              </Grid>
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
            onClick={submitHandler}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
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
