import React, { Component } from "react";
import API from "../utils/Api";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {
  state = {
    restArray: [],
    image: "",
    count: 0,
    favorited: false,
  };

  componentDidMount() {
    this.saveArray();
  }

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = { ...this.state };
    if (btnType === "pick") {
      newState.favorited = true;
      newState.count++;
    } else {
      newState.favorited = false;
      newState.count++;
    }
    this.setState(newState);
    this.loadNextRestaurant();
  };

  loadNextRestaurant = () => {
    if (this.state.restArray[this.state.count].featured_image === "") {
      return this.setState({
        image: "../public/NoImgAvail.jpg"
      })
    } else {
      return this.setState({
        image: this.state.restArray[this.state.count].featured_image
      })
    }
  };

  saveArray = () => {
    return API.getRandomRestaurantArray()
      .then(res => {
        return this.setState(pvSt=>{
          return ({...pvSt, restArray: res.map(item=>({...item.restaurant}))})
        },()=>{
          console.log({...this.state.restArray});
          return this.loadNextRestaurant();
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
