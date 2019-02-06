import React, { Component } from 'react';

class Profile extends Component {

  componentDidMount = async () => {
    const response = await fetch(`http://localhost:3678/api/users/1`,{
      method: 'GET'
    })
    let userInformation = await response.json()
    console.log(userInformation)
  }

  render() {
    const {
      match
    } = this.props
    return (
      <div id="font-color">
      {match.params.id} Profile
      </div>
    )
  }
}
export default Profile;
