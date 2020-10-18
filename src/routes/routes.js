import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/common';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/Dashboard' }} />
        )
      }
    />
  );
}

export default PublicRoute;

// function ProtectedRoute({ component: Component, ...rest }) {

//   let token = getToken();
//   let isAuth = token ? true : false;

//   return (
//     <Route {...rest}
//       render={
//         props =>  (isAuth) ? <Component {...props} /> : <Redirect exact to={{ pathname: '/', state: { from: props.location } }} />
//       }
//     />
//   )
// }
