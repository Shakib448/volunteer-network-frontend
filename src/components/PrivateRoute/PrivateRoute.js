import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { userInformationData } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/google-sign-in",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
