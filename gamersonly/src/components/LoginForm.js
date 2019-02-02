import React, {Component} from 'react';

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.inner)
  }

  render() {
    return (
      <div>
        <div id="custom-form" className="py-3 container">
          <form>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" autoComplete="username email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="label-color" className="form-text">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputPassword1">Password</label>
              <input type="password" autoComplete="current-password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label id="label-color" className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="mt-5">
          <div id="custom-form">
            <p>Don't have an account?<a href="/" onClick={(e)=> {this.props.toggleLogin(e)}}>Click Here</a></p>
          </div>
        </div>
      </div>)
  }

}
export default LoginForm;
