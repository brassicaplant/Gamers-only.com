import React, { Component } from 'react';

class CreateForm extends Component {

  state = {
    password: "",
    confPassword: "",
    about_me: "",
    username: "",
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    passwordMatch: false,
    profile_picture: ""
  }

  fileChangedHandler = event => {
    this.setState({ profile_picture: event.target.value })
    console.log(event.target.value)
  }

  ageChange = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  emailChange =(e) => {
    this.setState({
      email: e.target.value
    })
  }

  usernameChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  firstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  lastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  passwordMatch = (e) => {
    if (e.target.value === this.state.confPassword || e.target.value === this.state.password) {
      document.querySelector('.message1').style.color = 'white';
      this.setState({
        passwordMatch: true
      })
    } else {
      document.querySelector('.message1').style.color = 'red';
      this.setState({
        passwordMatch: false
      })
    }
  }

  aboutChange = (e) => {
    this.setState({
      about_me: e.target.value
    })
  }

  confPasswordChange = (e) => {
    this.passwordMatch(e)
    this.setState({
      confPassword: e.target.value
    })
    console.log(e.target.value)
  }

  passwordChange = (e) => {
    this.passwordMatch(e)
    this.setState({
      password: e.target.value
    })
    console.log(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.passwordMatch) {
      let userInfo = {
        password: this.state.password,
        screen_name: this.state.username,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        age: this.state.age,
        email: this.state.email,
        profile_picture: this.state.profile_picture,
        about_me: this.state.about_me
      }
      fetch('http://localhost:3678/api/users/', {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
    }

  }

  render() {
    return (
      <div>
        <div id="custom-form" className="py-3 container">
          <form>
            <div className="row">
              <div className="col-9">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputUsername1">Username</label>
                  <input type="text" autoComplete="username" onChange={(e)=> {this.usernameChange(e)}} value={this.state.username} className="form-control" id="exampleInputUsername1" required></input>
                </div>
              </div>
              <div className="col-3">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputAge1">Age</label>
                  <input type="number" onChange={(e)=> {this.ageChange(e)}} value={this.state.age} className="form-control" id="exampleInputAge1" required></input>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" onChange={(e)=> {this.emailChange(e)}} value={this.state.email} autoComplete="username email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required></input>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputFirstName1">First Name</label>
                  <input type="text" onChange={(e)=> {this.firstNameChange(e)}} value={this.state.firstName} className="form-control" id="exampleInputFirstName1" required></input>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputLastName1">Last Name</label>
                  <input type="text"onChange={(e)=> {this.lastNameChange(e)}} value={this.state.lastName} className="form-control" id="exampleInputLastName1" required></input>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" autoComplete="new-password" onChange={(e)=> {this.passwordChange(e)}} value={this.state.password} className="form-control" id="exampleInputPassword1" placeholder="Password" required></input>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputPassword2">Confirm Password</label>
                  <input type="password" autoComplete="new-password" onChange={(e)=> {this.confPasswordChange(e)}} value={this.state.confPassword} className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" required></input>
                </div>
              </div>
              <ul>
                <li id="font-color" className="message1">Passwords must match</li>
              </ul>
            </div>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputUsername2">About me</label>
              <textarea type="text" rows="5" autoComplete="username" onChange={(e)=> {this.aboutChange(e)}} value={this.state.about_me} className="form-control" id="exampleInputUsername2" required></textarea>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label id="label-color" htmlFor="exampleInputPicture1">Profile Picture</label>
                  <input type="text"onChange={(e)=> {this.fileChangedHandler(e)}} value={this.state.profile_picture} placeholder="Picture URL" className="form-control" id="exampleInputPicture1" required></input>
                </div>
              </div>
              <div className="col-6">
                <p id="font-color">You can upload any image here. <a className="mr-3" href="https://imgur.com/upload">Imgur</a></p>
              </div>
            </div>
            <button type="submit" onClick={(e)=> this.handleSubmit(e)} className="btn btn-primary">Submit</button>
            <small id="label-color" className="form-text">We'll never share your data with anyone else.</small>
          </form>
        </div>
        <div className="mt-5">
          <div id="custom-form" className="ml-auto">
            <p className="container" id="font-color">Have an account already?<a href="/" onClick={(e)=> {this.props.toggleLogin(e)}}>Click Here</a></p>

          </div>
        </div>
      </div>
    )
  }
}
export default CreateForm;
