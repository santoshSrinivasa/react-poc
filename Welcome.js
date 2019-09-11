import React from "react";
import {
  Route,
  Link,
  BrowserRouter
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
     <BrowserRouter>
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
     </BrowserRouter>
    );
  }
}