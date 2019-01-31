import React, { Component } from "react";
import API from "../utils/Api";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    image: "",
    favorited: false,
  };

  componentDidMount() {
    this.loadNextRestaurant();
  }

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = { ...this.state };
    if (btnType === "pick") {
      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextRestaurant();
  };

  loadNextRestaurant = () => {
    API.getRandomRestaurantArray()
      .then(res => {
        console.log(res)
        this.setState({
          image: res[0].restaurant.featured_image
        })
      }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <h1 className="text-center">Find New Restaurants!</h1>
        <h3 className="text-center">
          Thumbs up to save restaurant to your favorites
        </h3>
        <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Restaurant added to favorites list!
        </Alert>
      </div>
    );
  }
}

export default Discover;
