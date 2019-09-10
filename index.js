import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import UserLogin from "./UserLogin";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username:"Santosh",
      password:12345,
      userNameEntered: '',
      passwordEntered: '',
      isloginValid:false,
    };
  }
  handleChange(event)
  {
    const name = event.target.value;
    console.log(name);
  }
  
  render() {
    return (
      <div>
        <UserLogin onChange={this.handleChange}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
