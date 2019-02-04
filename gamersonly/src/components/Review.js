import React, { Component } from 'react';

class Review extends Component {

  render() {
    return (
      <div id="font-color" className="my-5 container">
        <div id="review-container" className="p-4 row">
          <div className="col-4">
            <img id="gameposter" src={this.props.gameposter} alt="Game Poster"></img>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4">
                <h1>{this.props.name}</h1>
              </div>
              <div>
                <h1>Rating: {this.props.userrating}</h1>
              </div>
            </div>
            <div className="row">
              <p>Review: {this.props.userreview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
export default Review;
