import React from "react";

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
      <h3 className="welcomeHeader">Welcome to Xyz project</h3>
      <div className="col-md-12">
      <label>User name : </label>
      <input type="text" name="username" onChange={this.props.onChange}/>
      </div>
      <div className="col-md-12">
      <label>Password : </label>
      <input type="password" name="password" onChange={this.props.onChange}/>
      </div>
      <button type="button">Login</button>
      </div>
    );
  }
}