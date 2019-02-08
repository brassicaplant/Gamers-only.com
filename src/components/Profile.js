import React, { Component } from 'react';
import Profilepost from './Profile_post.js'
class Profile extends Component {

  state = {
    filtereduserInfo: {},
    filteredPost: [],
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
    const response2 = await fetch('http://localhost:3678/api/posts/',{
      method: 'GET'
    })
    let listOfPosts = await response2.json()
    let filteredPost = listOfPosts.filter(post => post.poster_user_id === this.state.filtereduserInfo.id)
    this.setState({
      filteredPost: [...filteredPost]
    })
  }

  render() {
    return (
      <div id="font-color" className="my-5 py-5">
        <div id="post-background" className="pb-2 container">
          <div className="row">
            <div className="col-md-4">
              <img className="py-4" id="profile_picture" src={this.state.filtereduserInfo.profile_picture ? this.state.filtereduserInfo.profile_picture : ""} alt="Profile"></img>
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
          <div className="pb-2" id="profile-posts">
            <p className="pl-2">Posts made by {this.state.filtereduserInfo.screen_name}</p>
            {this.state.filteredPost.map((post, i) => <Profilepost post={post} key={i}/>)}
          </div>
        </div>
      </div>
    )
  }
}
export default Profile;
