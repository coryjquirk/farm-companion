import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//router
import PrivateRoute from "./components/private-route/PrivateRoute";
//managing state based on login status
import { StoreProvider } from "./utils/GlobalState";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
//pages
import Home from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import NoMatchPage from "./pages/NoMatchPage";
//custom components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
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
        <StoreProvider>
          <Router>
            <Nav />
            <Footer />
            <div className="fader">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute
                  exact
                  path="/inventory"
                  component={InventoryPage}
                />
                <Route component={NoMatchPage} />
              </Switch>
            </div>
          </Router>
        </StoreProvider>
      </Provider>
    );
  }
}

export default App;
