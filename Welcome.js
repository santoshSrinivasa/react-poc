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
import UserLogin from './UserLogin';

export default class Welcome extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div>
      <BrowserRouter history>
      <div> 
        <div className="welcomeHeader">Welcome To Customer Pricing Map</div>      
        <div>
        <Switch>
          <Route exact path="/" component={UserLogin} />
          <Route path="/searchOptions" component={SearchOptions} />
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