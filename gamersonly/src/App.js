import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/Login'
import Feed from './pages/Feed'
import Settings from './pages/Settings'
import Forum from './pages/Forum'
import NavBar from './components/NavBar'
import './App.css';

const AppRouter = () => (
  <Router>
    <div id="background">
      <NavBar/>
      <Route path="/" exact component={Login} />
      <Route path="/feed/" component={Feed} />
      <Route path="/settings/" component={Settings} />
      <Route path="/forum/" component={Forum}/>
    </div>
  </Router>
);

export default AppRouter;
