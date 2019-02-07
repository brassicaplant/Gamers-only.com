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
  }

  render() {
    const {
      match
    } = this.props
    return (
      <div id="font-color">
        {match.params.id} Profile
        <div className="container">
          <div className="row">
            <div className="col-3">
              <img id="profile_picture" src={this.state.filtereduserInfo.profile_picture ? this.state.filtereduserInfo.profile_picture : ""} alt="Profile"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile;
