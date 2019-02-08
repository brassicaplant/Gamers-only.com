import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import CreateForm from '../components/CreateForm'

class Login extends Component {

  state = {
    userlogin: false
  }

  toggleLogin = (e) => {
    e.preventDefault()
    this.setState({
      userlogin: !this.state.userlogin
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 my-5 mx-auto">
            <img className="d-flex justify-content-center mx-auto" id="Logo" src="https://i.imgur.com/MNXViWI.png" alt=""></img>
          </div>
          <h1 className="mx-auto" id="quote">"Normies just don't get it" -Coper</h1>
        </div>
        <div className="row">
          <div className="col-9 mb-5 offset-3 mx-auto">
            {this.state.userlogin ? <LoginForm logInUser={this.props.logInUser} toggleLogin={this.toggleLogin}/> : <CreateForm toggleLogin={this.toggleLogin}/>}
          </div>
        </div>
      </div>
    )
  }

}
export default Login;
