import React from "react";
import Welcome from "./Welcome";

export default class UserLogin extends React.Component 
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return(
      <div className="userLogin">
      <div className="welcomeHeader">Welcome</div>
      <div className="col-md-12">
      <label>User name : </label>
      <input type="text" name="userNameEntered" onChange={this.props.onChange}/>
      </div>
      <div className="col-md-12">
      <label>Password : </label>
      <input type="password" name="passwordEntered" onChange={this.props.onChange}/>
      </div>
      <button type="button" onClick={this.props.onClick}>Login</button>
            <Welcome/>
      </div>
    );
  }
}