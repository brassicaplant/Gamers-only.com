import React, { Component } from 'react';

class Profile extends Component {

  state = {
    filtereduserInfo: {},
    user: ""
  }

  componentDidMount = async () => {
    this.setState({
      user: this.props.match.params.id
    })
    const response = await fetch(`http://localhost:3678/api/users/${this.state.user}`,{
      method: 'GET'
    })
    let userInformation = await response.json()
    let filtereduserInfo = userInformation.filter(user => user.screen_name === this.state.user)
    this.setState({
      filtereduserInfo: filtereduserInfo[0]
    })
    console.log(this.state.filtereduserInfo)
    console.log(this.state.user)
  }

  render() {
    return (
      <div id="font-color">
        <div id="post-background" className="container">
          <div className="row">
            <div className="col-md-4">
              <img id="profile_picture" src={this.state.filtereduserInfo.profile_picture ? this.state.filtereduserInfo.profile_picture : ""} alt="Profile"></img>
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-lg-6"><h1>{this.state.filtereduserInfo.first_name} {this.state.filtereduserInfo.last_name}</h1></div>
                <div className="col-lg-6"><h3>({this.state.filtereduserInfo.screen_name})</h3></div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  {this.state.filtereduserInfo.about_me}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile;
