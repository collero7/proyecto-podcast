import React from 'react';
import { Route } from 'react-router-dom';

const RolRoute = ({ path, component: Component, ...rest }) => {

  return (
    <React.Fragment>
      <Route {...rest} render={(props) => <Component {...props} />} />
    </React.Fragment>
  );
};

export default RolRoute;