import React from 'react';
const Signup = () => {
  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

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

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </form>
  );
};
export default Signup;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// const signup = () => {
//   return (
//     <ul className="right">
//       <li>
//         <NavLink to="/">Signup</NavLink>
//       </li>
//       <li>
//         <NavLink to="/">Login</NavLink>
//       </li>
//     </ul>
//   );
// };
// export default signup;
