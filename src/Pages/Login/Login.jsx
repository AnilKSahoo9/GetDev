import React, { useState } from "react";
import { Modal, Button } from "react-materialize";
import "./Login.css";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUserSession, getToken } from "../../utils/common";
import Signup from "../Signup/Signup";
export const API_BASE_URL = process.env.REACT_APP_SERVER_URL;
export const ACCESS_TOKEN_NAME = "login_access_token";

const Login = (props) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
    error: null,
    //isAuthenticated: false,
  });

  // useEffect(() => {
  //   async function sessionHandler() {
  //     try {
  //       let token = await getToken();
  //       let isAuth = token ? true : false;
  //       setState((prevState) => ({ ...prevState, isAuthenticated: isAuth }));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }

  //   sessionHandler();
  // }, []);

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
    redirectToDashboard();
    axios
      .post(API_BASE_URL + "/user/login", payload)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        //redirectToDashboard();
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
  };

  const redirectToDashboard = () => {
    props.history.push("/Dashboard");
  };

  const redirectToSignUp = () => {
    props.history.push("/signup");
  };

  // if (state.isAuthenticated) {
  //   history.push('/Dashboard');
  //   return <></>;
  // }
  return (
    <div className="container2">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text.text-darken-3">Sign In</h5>
        <div className="input-field">
          <i class="material-icons prefix">mail_outline</i>
          <label htmlFor="email" data-error="wrong" data-success="right">
            Email
          </label>
          <input
            type="email"
            id="email"
            class="validate"
            onChange={handleChange}
          />
        </div>

        <div className="input-field">
          <i class="material-icons prefix">lock</i>
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign In</button>
        </div>
      </form>
      <div>
        <a href="">Not an user ? </a>
        <Modal
          header="Sign Up"
          trigger={<Button waves="light">Sign Up</Button>}
        >
          <Signup />
        </Modal>
      </div>
    </div>
  );
};
export default withRouter(Login);
