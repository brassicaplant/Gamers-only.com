import React, { Component } from 'react';
import Review from '../components/Review'

class Reviews extends Component {

  state = {
    reviews: [
      {
        name: "TF2",
        userrating: "5/5",
        userreview: "Team Fortress 2 is a really fun 1st Person shooter that you can hang out with your friends on and just play tons of fun games.",
        gameposter: "https://images-na.ssl-images-amazon.com/images/G/01/videogames/detail-page/tf2_1_lg.jpg",
        platform: ["Windows", "PlayStation", "Xbox"]
      },
      {
        name: "Fallout 76",
        userrating: "2/5",
        userreview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        gameposter: "https://ae01.alicdn.com/kf/HTB1C7cfuOOYBuNjSsD4q6zSkFXai/FX581-Fallout-76-New-Video-Game-2018-Vault-76-Robot-Game-Cover-Custom-Poster-Art-Silk.jpg_640x640.jpg",
        platform: ["Windows", "PlayStation", "Xbox"]
      },
      {
        name: "",
        userrating: "",
        userreview: "",
        gameposter: "",
        platform: []
      },
      {
        name: "",
        userrating: "",
        userreview: "",
        gameposter: "",
        platform: []
      }
    ]
  }

  render() {
    return (
      <div>
        {this.state.reviews.map((review, i)=> <Review
          gameposter={review.gameposter}
          userrating={review.userrating}
          userreview={review.userreview}
          key={i}
          name={review.name}/>
        )}
      </div>
    )
  }

}
export default Reviews;
