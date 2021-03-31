import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Nav";
import Landing from "./components/Landing";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";
import Options from "./components/UserOptions";
import Inventory from "./components/Inventory";
import SeedInventory from "./components/SeedInventory";
import GeneralInventory from "./components/GeneralInventory";
import TimeCard from "./components/TimeCard";
import Handbook from "./components/Handbook";
import FrogtownHistory from "./components/Handbook/FrogtownHistory";
import FarmHistory from "./components/Handbook/FarmHistory";
import Supporters from "./components/Handbook/Supporters";
import Directory from "./components/Directory";
import Documents from "./components/Documents";
import FarmMap from "./components/FarmMap";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <Navbar />
            <Header />
            <Footer />
            <div className="fader">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/" component={Landing} />
              <PrivateRoute exact path="/options" component={Options} />
              <PrivateRoute exact path="/logout" component={Logout} />
              <PrivateRoute exact path="/inventory" component={Inventory} />
              <PrivateRoute exact path="/inventory/seeds" component={SeedInventory} />
              <PrivateRoute exact path="/inventory/equipment" component={GeneralInventory} />
              <PrivateRoute exact path="/timecard" component={TimeCard} />
              <PrivateRoute exact path="/handbook" component={Handbook} />
              <PrivateRoute exact path="/handbook/frogtownhistory" component={FrogtownHistory} />
              <PrivateRoute exact path="/handbook/farmhistory" component={FarmHistory} />
              <PrivateRoute exact path="/handbook/supporters" component={Supporters} />
              <PrivateRoute exact path="/directory" component={Directory} />
              <PrivateRoute exact path="/documents" component={Documents} />
              <PrivateRoute exact path="/farmmap" component={FarmMap} />
            </Switch>
            </div>
            <ScrollArrow/>
        </Router>
      </Provider>
    );
  }
}
export default App;
