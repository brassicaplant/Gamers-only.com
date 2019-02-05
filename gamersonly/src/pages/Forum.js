import React, { Component } from 'react';
import Post from '../components/Post'
import ComposingPost from '../components/ComposePost'

class Feed extends Component {

  state = {
    composing: false,
    posts: [],
    postTitle: "",
    postBody: ""
  }

  componentDidMount = async () => {
    let response = await fetch('http://localhost:3678/api/posts/',{
      method: 'GET',
    })
    let posts = await response.json()
    console.log(posts)
    let newState = {
      posts: [...posts]
    }
    this.setState(newState)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let postInfo = {
      poster_user_id: 2,
      post_title: this.state.postTitle,
      post_description: this.state.postBody
    }
    const response = await fetch('http://localhost:3678/api/posts/', {
      method: 'POST',
      body: JSON.stringify(postInfo),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    let newState = await response.json()
    this.setState({
      posts: [...this.state.posts, newState]
    })
  }

  titleChange = (e) => {
    this.setState({
      postTitle: e.target.value
    })
    console.log(e.target.value)
  }

  bodyChange = (e) => {
    this.setState({
      postBody: e.target.value
    })
    console.log(e.target.value)
  }

  togglePost = () => {
    this.setState({
      composing: !this.state.composing,
      posts: this.state.posts
    })
  }

  render() {
    return (
      <div id="background">
        <button type="button" onClick={()=> {this.togglePost()}} className="m-4 btn btn-danger">Create Post</button>
        {this.state.composing ? <ComposingPost togglePost={this.togglePost} postTitle={this.state.postTitle} postBody={this.state.postBody} bodyChange={this.bodyChange} titleChange={this.titleChange} handleSubmit={this.handleSubmit}/> : this.state.posts.length > 0 ? this.state.posts.map((post, i) => <Post post={post} key={i}/>) : <p id="font-color">No Posts have been made.</p>}
      </div>
    )
  }

}
export default Feed;