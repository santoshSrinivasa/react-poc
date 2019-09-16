import React from "react";
import NavigationBar from "./NavigationBar";
import { Container, Row, Col } from 'reactstrap';

export default class SearchOptions extends React.Component
{
  constructor()
  {
    super();
    this.state={
      radioValue:'LevelId',
      levelIdValue:'',
      eanValue:'',
      cashcheckBoxValue:'',
      deletecheckBoxValue:''
    }
  }
  searchClick = event =>
  {
    event.preventDefault();
    if(this.state.radioValue == 'LevelId')
    {
      console.log("search value is",this.state.radioValue + '-' + this.state.levelIdValue + '-' + this.state.cashcheckBoxValue + '-' + this.state.deletecheckBoxValue);
    }else if(this.state.radioValue == 'EAN'){
      console.log("search value is",this.state.radioValue + '-' + this.state.eanValue + '-' + this.state.cashcheckBoxValue + '-' + this.state.deletecheckBoxValue);
    }
    
  }

levelIdChange = event =>
{
  const value = event.target.value;
  this.setState({levelIdValue:value});
}
eanChange = event =>
{
  const value = event.target.value;
  this.setState({eanValue:value});
}
cashCheckBoxChange = event =>
{
  if(event.target.checked)
  {
    const value = event.target.value;
    this.setState({cashcheckBoxValue:value});
  }else{
    this.setState({cashcheckBoxValue:''});
  }
}
deleteCheckBoxChange = event =>
{
   if(event.target.checked)
  {
    const value = event.target.value;
    this.setState({deletecheckBoxValue:value});
  }else{
    this.setState({deletecheckBoxValue:''});
  }
}
radioChange= (event) =>
{
  const value = event.target.value;
  this.setState({radioValue:value});
}

  render()
  {
    return(
      <div>
      <NavigationBar />
      <div className="col-md-12 searchContainer">
        <div className="col-md-3 searchBorder">
          <div className="col-md-3 levelId margin">
          <input type="radio" name="selection" value="LevelId" defaultChecked onChange={this.radioChange}/>Level Id <br/>
          <input type="text" className="marginLevel" onChange={this.levelIdChange}/>
          </div>
          <div className="col-md-3 levelId margin">
          <input type="radio" name="selection" value="EAN" onChange={this.radioChange}/>EAN <br/>
          <input type="text" className="marginEan" onChange={this.eanChange}/>
          </div>
        </div>
        <div className="col-md-3 searchBorder searchCheckbox">
          <input type="checkbox" className="margin" value="Cash" onChange={this.cashCheckBoxChange}/>Cash<br/>
          <input type="checkbox" className="margin" value="Delete" onChange={this.deleteCheckBoxChange}/>Delete<br/>
        </div>
        </div>
        <div className="searchBtn">
        <button type="submit" onClick={this.searchClick}>Search</button>
        </div>
        </div>
    );
  }
}
