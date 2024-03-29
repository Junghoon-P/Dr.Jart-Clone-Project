import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SiginUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Shop from './pages/Shop/Shop';
import Detail from './pages/Detail/Detail';

import './styles/common.scss';
import './styles/reset.scss';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SiginUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
