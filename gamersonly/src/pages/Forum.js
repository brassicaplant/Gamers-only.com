import React, { Component } from 'react';


class Reviews extends Component {

  state = {}

  componentDidMount = async () => {
    let response = await fetch('http://localhost:3678/api/posts/',{
      method: 'GET',
    })
    let posts = await response.json()
    console.log(posts)
  }

  render() {
    return (
      <div>
        Forum
      </div>
    )
  }

}
export default Reviews;
