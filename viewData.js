import React from "react";

export default class ViewData extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h3>{this.props.searchValueStore}</h3>
    );
  }
}


