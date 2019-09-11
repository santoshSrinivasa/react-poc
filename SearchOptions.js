import React from "react";
import {Button} from "react-bootstrap";

export default class SearchOptions extends React.Component
{
  constructor()
  {
    super();
  }
  render()
  {
    return(
      <div>
      <div className="col-md-12 searchContainer">
        <div className="col-md-3 searchBorder">
          <div className="col-md-3 levelId margin">
          <input type="radio"/>Level Id <br/>
          <input type="text" className="marginLevel"/>
          </div>
          <div className="col-md-3 levelId margin">
          <input type="radio"/>EAN <br/>
          <input type="text" className="marginEan"/>
          </div>
        </div>
        <div className="col-md-3 searchBorder searchCheckbox">
          <input type="checkbox" className="margin"/>Cash<br/>
          <input type="checkbox" className="margin"/>Delete<br/>
        </div>
        </div>
        <div>
        <Button>Search</Button>
        </div>
        </div>
    );
  }
}
