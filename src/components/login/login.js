import React from 'react';
const Login = () => {
  return (
    <form>
      <h3>Sign In</h3>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  );
};
export default Login;
// import React, { useState } from 'react';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleChange = (e) => {
//     setEmail = (e) => {
//       e.target.value;
//     };
//     setPassword = (e) => {
//       e.target.value;
//     };
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="white">
//         <h5 className="grey-text.text-darken-3">login</h5>
//         <div className="input-field">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <label htmlFor="password">password</label>
//           <input type="password" id="password" onChange={handleChange} />
//         </div>

//         <div className="input-field">
//           <button className="btn pink lighten-1 z-depth-0">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Login;
