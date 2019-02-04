import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Api from "../utils/Api";
//import { BrowserRouter as Router, Route } from "react-router-dom";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";


class Login extends Component {

   state = {
     username : "",
     password : "",
   };
   
   handleInputChange = event => {
     let value = event.target.value;
     const name = event.target.name;

     this.setState({
       [name]: value
     });
   };

   handleFormSubmit = event => {
     event.preventDefault();

     if(Api.getUserbyUsername(this.state.username))
     {
       const user = Api.getUserbyUsername(this.state.username);
       if(user.password === this.state.password)
       {
         alert(`Hello ${this.state.username}`)
       }
       else
       {
         alert(`That password is incorrect`);
       }
     }
     alert('That username does not exist');

     this.setState({
       password : ""
     });
   };

   render()
   {
    return (
      <div>
        <Jumbotron backgroundImage="https://images.unsplash.com/photo-1512805147242-c3e79caf64bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
          <h1>TableIt</h1>
          <h2>Find dinner tonight... and tomorrow night.</h2>
        <form className = "form">
          <input
            value = {this.state.username}
            name = "username"
            onChange = {this.handleInputChange}
            type = "text"
            placeholder = "Username"
            />

            <input
              value = {this.state.password}
              name = "password"
              onChange = {this.handleInputChange}
              type = "password"
              placeholder = "Password"
              />
          <button onClick = {this.handleFormSubmit}> Log-In </button>
          <a href = "/createUser"> Create a User </a>
        </form>
        </Jumbotron>
      </div>
    );
   }
};


export default Login;