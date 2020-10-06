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
import RegisterVolunteerInfo from "./components/RegisterVolunteerInfo/RegisterVolunteerInfo";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userInformationData = createContext();
export const userInformationEvent = createContext();

const App = withRouter(({ location }) => {
  const [userData, setUserData] = useState({});
  const [eventInfo, setEventInfo] = useState({});

  return (
    <div className="App">
      <userInformationData.Provider value={[userData, setUserData]}>
        <userInformationEvent.Provider value={[eventInfo, setEventInfo]}>
          {location.pathname !== "/google-sign-in" && <MainNav /> &&
            location.pathname !== "/register" && <MainNav />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/google-sign-in" component={GoogleLogin} />
            <PrivateRoute exact path="/register">
              <RegisterForm />
            </PrivateRoute>
            <PrivateRoute exact path="/register-volunteer">
              <RegisterVolunteerInfo />
            </PrivateRoute>
            <Route exact path="*" component={NotFound} />
          </Switch>
        </userInformationEvent.Provider>
      </userInformationData.Provider>
    </div>
  );
});
export default App;
