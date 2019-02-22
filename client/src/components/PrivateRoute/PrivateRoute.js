import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { get as _get } from 'lodash';
import store from 'store2';

// Utils
const isLoggedin = () => {
  const userFromLocalStorage = store('user');
  return _get(userFromLocalStorage, 'name', false);
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedin() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: 'login' }} />
      )
    }
  />
);

export default PrivateRoute;
