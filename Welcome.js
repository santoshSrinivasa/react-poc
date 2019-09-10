import React, { Component } from "react";
import {
  Route,
  Link,
  HashRouter
} from "react-router-dom";
import SearchOptions from "./SearchOptions";
import CustomerInfo from "./CustomerInfo";
import EAN from "./EAN";
import PriceMap from "./PriceMap";


class Welcomepage extends Component {
  render() {
    return (
     <HashRouter>
     <div>
      <div>
        <ul>
        <li><Link exact to="/">SearchOptions</Link></li>
        <li><Link exact to="/CustomerInfo">CustomerInfo</Link></li>
        <li><Link exact to="/EAN">EAN</Link></li>
        <li><Link exact to="/PriceMap">PriceMap</Link></li>
        </ul>
        <div>
          <Route exact path="/" component={SearchOptions} />
          <Route exact path="/CustomerInfo" component={CustomerInfo} />
          <Route exact path="/EAN" component={EAN} />
          <Route exact path="/PriceMap" component={PriceMap} />
        </div>
       </div>
     </div>
     </HashRouter>
    );
  }
}
 
export default Welcomepage;