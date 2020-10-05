import React, { createContext, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNav from "./components/MainNav/MainNav";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import GoogleLogin from "./components/GoogleLogin/GoogleLogin";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import NotFound from "./components/NotFound/NotFound";
import registerVolunteer from "./components/registerVolunteer/registerVolunteer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userInformationData = createContext();
export const userInformationRoute = createContext();

const App = withRouter(({ location }) => {
  const [userData, setUserData] = useState({});
  const [userRoute, setUserRoute] = useState({});

  return (
    <div className="App">
      <userInformationData.Provider value={[userData, setUserData]}>
        <userInformationRoute.Provider value={[userRoute, setUserRoute]}>
          {location.pathname !== "/google-sign-in" && <MainNav /> &&
            location.pathname !== "/register" && <MainNav />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-sign-in" component={GoogleLogin} />
            <PrivateRoute>
              <Route exact path="/register" component={RegisterForm} />
            </PrivateRoute>
            <PrivateRoute>
              <Route
                exact
                path="/register-volunteer"
                component={registerVolunteer}
              />
            </PrivateRoute>

            <Route exact path="*" component={NotFound} />
          </Switch>
        </userInformationRoute.Provider>
      </userInformationData.Provider>
    </div>
  );
});

export default App;
