import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

const App = () => {
  const user = null;
  return (
    <div className="app">
      <Router>
        <Switch>
          {!user ? (
            <LoginScreen />
          ) : (
            <Route exact path="/NewNetflixClone">
              <HomeScreen />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
