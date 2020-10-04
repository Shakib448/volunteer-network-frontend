import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import NotFound from "./components/NotFound/NotFound";
import registerVolunteer from "./components/registerVolunteer/registerVolunteer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userInformationData = createContext();

function App() {
  const [userData, setUserData] = useState({});

  return (
    <div className="App">
      <userInformationData.Provider value={[userData, setUserData]}>
        <Router>
          <MainNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-sign-in" component={GoogleLogin} />
            <PrivateRoute>
              <Route exact path="/register" component={RegisterForm} />
            </PrivateRoute>
            <Route
              exact
              path="/register-volunteer"
              component={registerVolunteer}
            />

            <Route exact path="*" component={NotFound} />
          </Switch>
        </Router>
      </userInformationData.Provider>
    </div>
  );
}

export default App;
