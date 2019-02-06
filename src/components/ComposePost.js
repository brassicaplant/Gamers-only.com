import React, {Component} from 'react';

class ComposePost extends Component {

  render() {
    return (<div className="container">
      <form className="form-horizontal well py-5" id="post-background">
        <div className="form-group">
          <div className="col-sm-8 offset-sm-2 ">
            <h4 id="font-color">Create Post</h4>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject" id="font-color" className="offset-sm-2 col-sm-2 control-label">Title</label>
          <div className="offset-sm-2 col-sm-8">
            <input type="text" className="form-control" onChange={(e)=> {this.props.titleChange(e)}} value={this.props.postTitle} id="subject" placeholder="Enter a Title" name="subject"></input>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="body" id="font-color" className="offset-sm-2 col-sm-2 control-label">Body</label>
          <div className="offset-sm-2 col-sm-8">
            <textarea name="body" id="body" onChange={(e)=> {this.props.bodyChange(e)}} value={this.props.postBody} className="form-control"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 offset-sm-2 ">
            <input type="submit" id="font-color" value="Send" onClick={(e) => {
              this.props.handleSubmit(e)
              this.props.togglePost()
            }} className="btn btn-primary"></input>
          </div>
        </div>
      </form>
    </div>)
  }

}
export default ComposePost;
