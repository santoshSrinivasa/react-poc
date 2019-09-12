import React from "react";
import {
  Route,
  Link,
  BrowserRouter,
  Switch
} from "react-router-dom";
import SearchOptions from "./SearchOptions";
import CustomerInfo from "./CustomerInfo";
import EAN from "./EAN";
import PriceMap from "./PriceMap";

export default class Welcome extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div>
      <BrowserRouter history>
      <div>
        <ul>
        <li><Link exact to="/">SearchOptions</Link></li>
        <li><Link to="/CustomerInfo">CustomerInfo</Link></li>
        <li><Link to="/EAN">EAN</Link></li>
        <li><Link to="/PriceMap">PriceMap</Link></li>
        </ul>
        <div>
        <Switch>
          <Route exact path="/" component={SearchOptions} />
          <Route path="/CustomerInfo" component={CustomerInfo} />
          <Route path="/EAN" component={EAN} />
          <Route path="/PriceMap" component={PriceMap} />
        </Switch>
        </div>
       </div>
       </BrowserRouter>
     </div>
     
    );
  }
}