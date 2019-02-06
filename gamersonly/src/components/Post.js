import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Review extends Component {

  state = {
    user: {}
  }

  componentDidMount = async () => {
    const response = await fetch(`http://localhost:3678/api/users/${this.props.post.poster_user_id}`,{
      method: 'GET'
    })
    let userInfo = await response.json()
    this.setState({
      user: userInfo
    })
  }

  render() {
    return (
      <div id="font-color" className="my-5 container">
        <div id="post-background">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img className="my-4" id="profile_picture" src={this.state.user.profile_picture} alt="Profile"></img>
                <br></br>
                <Link to={{
                  pathname: `/${this.state.user.screen_name}`
                }}>{this.state.user.screen_name}</Link>
              </div>
              <div className="col-md-8">
                <h1 className="my-3">{this.props.post.post_title}</h1>
                <div className="row">
                  <p id="post-des-font" className="pl-3">{this.props.post.post_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Review;
