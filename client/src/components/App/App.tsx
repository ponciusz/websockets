import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Login, Home } from '../../views/Pages';
import history from '../../history';
import PrivateRoute from '../PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/login" name="Login Page" component={Login} />
          <PrivateRoute path="/" name="Home" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
