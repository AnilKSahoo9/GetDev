import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { setUserSession } from '../../utils/common';
const Signup = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
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
    sendDetailsToServer();
  };

  const sendDetailsToServer = () => {
    const payload = {
      email: state.email,
      password: state.password,
      firstName: state.firstName,
      lastName: state.lastName,
    };
    redirectToDashboard();
    // axios
    //   .post(API_BASE_URL + '/user/login', payload)
    //   .then((response) => {
    //     setUserSession(response.data.token, response.data.user);
    //   })
    //   .catch((error) => {
    //     setState((prevState) => {
    //       return {
    //         ...prevState,
    //         error: 'Something went wrong. Please try again later.',
    //       };
    //     });
    //     console.log(error);
    //   });
  };

  const redirectToDashboard = () => {
    history.push('/Dashboard');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="firstName">firstName</label>
          <input type="text" id="firstName" onChange={handleChange} />
        </div>

        <div className="input-field">
          <label htmlFor="lastName">lastName</label>
          <input type="text" id="lastName" onChange={handleChange} />
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
