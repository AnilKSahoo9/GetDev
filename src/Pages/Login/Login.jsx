import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

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
    marginTop: theme.spacing(8),
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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
    error: null,
    //isAuthenticated: false,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (state.password === state.confirmPassword) {
    sendDetailsToServer();
    // } else {
    //   setState((prev) => {
    //     return {
    //       ...prev,
    //       error: 'error',
    //     };
    //   });
    // }
  };
  const sendDetailsToServer = () => {
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(
        `http://localhost:4000/api/users/login`,
        //JSON.stringify(payload),
        payload,
        {
          header: {
            "Content-type":
              "application/json,application/x-www-form-urlencoded, charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          redirectToDashboard();
        }
        //setUserSession(response.data.token, response.data.user);
        // if (response.status === 200) {
        //   setState((prevState) => ({
        //     ...prevState,
        //     successMessage: 'Login successful. Redirecting to dash board..',
        //   }));
        //   localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
        //   redirectToDashboard();
        //   props.showError(null);
        // } else if (response.code === 204) {
        //   props.showError('Username and password do not match');
        // } else {
        //   props.showError('Username does not exists');
        // }
      })
      .catch((error) => {
        setState((prevState) => {
          return {
            ...prevState,
            error: "Something went wrong. Please try again later.",
          };
        });
        console.log(error);
      });
    // alert("success");
    // redirectToDashboard();
  };

  const redirectToDashboard = () => {
    history.push("/Dashboard");
  };

  // const redirectToSignUp = () => {
  //   props.history.push("/signup");
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            //type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={state.email && state.password && handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// import React, { useState } from "react";
// //import { Modal, Button } from "react-materialize";
// import "./Login.css";
// import { withRouter } from "react-router-dom";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { setUserSession, getToken } from "../../utils/common";
// import Signup from "../Signup/Signup";
// export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
// export const ACCESS_TOKEN_NAME = "login_access_token";

// const Login = (props) => {
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   //const history = useHistory();
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     successMessage: null,
//     error: null,
//     //isAuthenticated: false,
//   });

//   // useEffect(() => {
//   //   async function sessionHandler() {
//   //     try {
//   //       let token = await getToken();
//   //       let isAuth = token ? true : false;
//   //       setState((prevState) => ({ ...prevState, isAuthenticated: isAuth }));
//   //     } catch (e) {
//   //       console.log(e);
//   //     }
//   //   }

//   //   sessionHandler();
//   // }, []);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [id]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (state.password === state.confirmPassword) {
//     sendDetailsToServer();
//     // } else {
//     //   setState((prev) => {
//     //     return {
//     //       ...prev,
//     //       error: 'error',
//     //     };
//     //   });
//     // }
//   };

//   const sendDetailsToServer = () => {
//     const payload = {
//       email: state.email,
//       password: state.password,
//     };
//     // fetch(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-type": "application/json; charset=UTF-8",
//     //   },
//     //   //credentials: "include",
//     //   body: JSON.stringify(payload),
//     // })
//     //   .then((res) => res.json())
//     //   .then((response) => {
//     //     // Handle response
//     //     if (response.status === 200) {
//     //       alert("success");
//     //     }
//     //     console.log("Response: ", response);
//     //   })
//     //   .catch((error) => {
//     //     // Handle error
//     //     console.log("Error message: ", error);
//     //   });
//     //redirectToDashboard();
//     axios
//       .post(
//         `http://localhost:4000/api/users/login`,
//         //JSON.stringify(payload),
//         payload,
//         {
//           header: {
//             "Content-type":
//               "application/json,application/x-www-form-urlencoded, charset=UTF-8",
//           },
//         }
//       )
//       .then((response) => {
//         console.log(response);
//         if (response.status === 200) {
//           redirectToDashboard();
//         }
//         //setUserSession(response.data.token, response.data.user);
//         // if (response.status === 200) {
//         //   setState((prevState) => ({
//         //     ...prevState,
//         //     successMessage: 'Login successful. Redirecting to dash board..',
//         //   }));
//         //   localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
//         //   redirectToDashboard();
//         //   props.showError(null);
//         // } else if (response.code === 204) {
//         //   props.showError('Username and password do not match');
//         // } else {
//         //   props.showError('Username does not exists');
//         // }
//       })
//       .catch((error) => {
//         setState((prevState) => {
//           return {
//             ...prevState,
//             error: "Something went wrong. Please try again later.",
//           };
//         });
//         console.log(error);
//       });
//   };

//   const redirectToDashboard = () => {
//     props.history.push("/Dashboard");
//   };

//   const redirectToSignUp = () => {
//     props.history.push("/signup");
//   };

//   // if (state.isAuthenticated) {
//   //   history.push('/Dashboard');
//   //   return <></>;
//   // }
//   return (
//     <div className="container2">
//       <form
//         onSubmit={state.email && state.password && handleSubmit}
//         className="white"
//       >
//         <h5 className="grey-text.text-darken-3">Sign In</h5>
//         <div className="input-field">
//           <i class="material-icons prefix">mail_outline</i>
//           <label htmlFor="email" data-error="wrong" data-success="right">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             class="validate"
//             onChange={handleChange}
//           />
//         </div>

//         <div className="input-field">
//           <i class="material-icons prefix">lock</i>
//           <label htmlFor="password">password</label>
//           <input type="password" id="password" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <button className="btn pink lighten-1 z-depth-0">Sign In</button>
//         </div>
//       </form>

//       <div>
//         <a href="">
//           <h6>Not an user ? </h6>
//         </a>
//         {/* <Modal
//           //header="Sign Up"
//           trigger={<Button waves="light">Sign Up</Button>}
//         >
//           <Signup />
//         </Modal> */}
//       </div>
//     </div>
//   );
// };
// export default withRouter(Login);
