import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar-color navbar navbar-expand-lg navbar-dark bg-dark">
        <img id="brand" src="https://i.imgur.com/MNXViWI.png" alt="GamersOnly Logo"></img>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ml-3 collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="mr-5 nav-item">
              <Link id="navbar-item-custom" className="nav-link" to="/feed">Feed</Link>
            </li>
            <li className="mr-5 nav-item">
              <Link id="navbar-item-custom" className="nav-link" to="/forum">Forum</Link>
            </li>
            <li className="mr-5 nav-item">
              <Link id="navbar-item-custom" className="nav-link" to="/settings">Settings</Link>
            </li>
          </ul>
          <span className="ml-auto nav-item">
            <Link id="navbar-item-custom" className="nav-link pl-0" to="/">{this.props.loggedIn ? "Logout" : "Login"}</Link>
          </span>
        </div>
      </nav>
    )
  }

}
export default NavBar;
