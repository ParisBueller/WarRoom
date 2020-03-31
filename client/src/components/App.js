import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

class App extends React.Component {
    componentDidMount() {
      this.props.fetchUser();
    }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div className="container">
          <Navbar />
          <Route exact path="/dashboard" component={Dashboard}></Route>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);



