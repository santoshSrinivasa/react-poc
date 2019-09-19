import React from "react";

export default class ViewData extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.state);
    return(
      <h3>{this.props.state}</h3>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}
