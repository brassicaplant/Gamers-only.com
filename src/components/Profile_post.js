import React, { Component } from 'react';

class Profile_Post extends Component {

  render() {
    return (
      <div id="font-color" className="my-5 container">
        <div id="profile-post-background">
          <div className="container">
            <div className="row">
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
export default Profile_Post;
