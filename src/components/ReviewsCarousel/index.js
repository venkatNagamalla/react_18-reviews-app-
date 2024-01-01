// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  profileDetails = profileDetails => {
    const {imgUrl, username, companyName, description} = profileDetails
    return (
      <div className="profile-container">
        <img className="profile-img" src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onDecrease = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onIncrease = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const profileDetails = reviewsList[index]

    return (
      <div className="bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <div className="details-container">
          <button
            data-testid="leftArrow"
            type="button"
            onClick={this.onDecrease}
          >
            <img
              className="buttons-image"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.profileDetails(profileDetails)}
          <button
            data-testid="rightArrow"
            type="button"
            onClick={this.onIncrease}
          >
            <img
              className="buttons-image"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
