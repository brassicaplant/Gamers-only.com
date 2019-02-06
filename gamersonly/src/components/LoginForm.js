import React, {Component} from 'react';

class LoginForm extends Component {

  state = {
    loginEmail: "",
    loginPassword: ""
  }

  emailChange = (e) => {
    this.setState({
      loginEmail: e.target.value
    })
  }

  passwordChange = (e) => {
    this.setState({
      loginPassword: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.logInUser(1)
    console.log('Login')
  }

  loginWithGitHub = () => {}

  render() {
    return (
      <div>
        <div id="custom-form" className="py-3 container">
          <form>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" value={this.state.loginEmail} onChange={(e)=> this.emailChange(e)} autoComplete="username email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="label-color" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputPassword1">Password</label>
              <input type="password" value={this.state.loginPassword} onChange={(e) => this.passwordChange(e)} autoComplete="current-password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="submit" onClick={(e)=> this.handleSubmit(e)} className="btn btn-primary">Submit</button>
            <a id="github-button" onClick={this.loginWithGitHub} href="/" className="btn btn-block btn-social btn-github">
              <i className="fa fa-github"></i> Sign in with Github
            </a>
          </form>
        </div>
        <div className="mt-5">
          <div id="custom-form">
            <p className="container" id="font-color">Don't have an account?<a href="/" onClick={(e)=> {this.props.toggleLogin(e)}}>Click Here</a></p>
          </div>
        </div>
      </div>)
  }

}
export default LoginForm;
