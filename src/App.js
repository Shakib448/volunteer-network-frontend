import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/google-sign-in" component={GoogleLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
