import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//router
//managing state based on login status
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
//pages
import Home from "./pages/HomePage";
import InventoryLaunch from "./pages/InventoryLaunch";
import DirectoryLaunch from "./pages/DirectoryLaunch";
import SeedInventoryPage from "./pages/SeedInventoryPage";
import GeneralInventoryPage from "./pages/GeneralInventoryPage";
import TimeCard from "./components/TimeCard";
import Partners from "./components/Partners"
import FarmMap from "./components/FarmMap"
import NoMatchPage from "./pages/NoMatchPage";
import Options from "./pages/OptionsPage";
import Handbook from "./pages/HandbookPage";
//custom components
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FarmHistory from "./components/FarmHistory";
import FrogtownHistory from "./components/FrogtownHistory";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ScrollArrow from "./components/ScrollArrow";
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
      <Router>
        <Nav />
        <Header />
        <Footer />
        <div className="fader">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/options" component={Options} />
            <Route path="/handbook" component={Handbook} />
            <Route exact path="/inventoryhome" component={InventoryLaunch} />
            <Route exact path="/directoryhome" component={DirectoryLaunch} />
            <Route exact path="/Partners" component={Partners} />
            <Route exact path="/seedinventory" component={SeedInventoryPage} />
            <Route exact path="/timecard" component={TimeCard} />
            <Route exact path="/farmmap" component={FarmMap} />
            <Route exact path="/generalinventory" component={GeneralInventoryPage} />
            <Route path="/farmhistory" component={FarmHistory} />
            <Route path="/frogtownhistory" component={FrogtownHistory} />
            <Route component={NoMatchPage} />
          </Switch>
        </div>
        <ScrollArrow/>
      </Router>
    );
  }
}

export default App;
