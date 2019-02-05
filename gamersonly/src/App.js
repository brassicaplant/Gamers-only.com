import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login'
import Feed from './pages/Feed'
import Settings from './pages/Settings'
import Forum from './pages/Forum'
import NavBar from './components/NavBar'
import './App.css';

class AppRouter extends Component {

  state = {
    currentUserInfo: {

    },
    loggedIn: false
  }

  logInUser = async (e, userId) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:3678/api/users/${userId}`,{
      method: 'GET'
    })
    let newState = await response.json()
    console.log(newState)
  }

  render () {
    return (
      <Router>
        <div id="background">
          <NavBar/>
          <Route path="/" exact render={props => <Login logInUser={this.logInUser}/>} />
          <Route path="/feed/" component={Feed} />
          <Route path="/settings/" component={Settings} />
          <Route path="/forum/" component={Forum}/>
        </div>
      </Router>

    )
  }
};

export default AppRouter;
