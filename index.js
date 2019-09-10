import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import UserLogin from "./UserLogin";
import Welcome from "./Welcome";
import BrowserRouter from "react-router";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username:"Santosh",
      password:12345,
      userNameEntered: "",
      passwordEntered: "",
      isloginValid:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event)
  {
    const name = event.target.name;
    const value = event.target.type === "text" ? event.target.value : event.target.value;
    if(name == "userNameEntered")
    this.setState({userNameEntered: value});
    if(name == "passwordEntered")
    this.setState({passwordEntered: value}); 
  }
  handleClick(event)
  {
    event.preventDefault();
    const nameDefault = this.state.username;
    const pwdDefault = this.state.password;
    const nameEntered = this.state.userNameEntered;
    const pwdEntered = this.state.passwordEntered
    if((nameDefault == nameEntered)&&(pwdDefault == pwdEntered)){
      this.setState({isloginValid: true});
      console.log(this.state.isloginValid)
    }else{
      console.log(this.state.isloginValid)
    }
  }
  render() {
    return (
      <div>
        <UserLogin onChange={this.handleChange} onClick={this.handleClick}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
