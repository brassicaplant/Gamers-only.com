import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login'
import Feed from './pages/Feed'
import Settings from './pages/Settings'
import Forum from './pages/Forum'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import './App.css';

class AppRouter extends Component {

  state = {
    currentUserInfo: {},
    loggedIn: false,
    userId: 1,
    showProfile: false,

  }

  togglePost = () => {
    this.setState({
      showProfile: !this.state.showProfile
    })
  }

  logInUser = async (userId) => {
    const response = await fetch(`http://localhost:3678/api/users/${userId}`,{
      method: 'GET'
    })
    let newState = await response.json()
    this.setState({
      currentUserInfo: newState
    })
    console.log(this)
  }

  render () {
    return (
      <Router>
        <div id="background">
          <NavBar/>
          <Route path="/" exact render={props => <Login logInUser={this.logInUser}/>} />
          <Route path="/feed/" component={Feed} />
          <Route path="/settings/" component={Settings} />
          <Route exact path="/forum/" component={props => <Forum togglePost={this.togglePost}/>}/>
          <Route path={`/forum/:id`} component={Profile}/>
        </div>
      </Router>
    )
  }
};

export default AppRouter;
