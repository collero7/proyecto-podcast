import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import BackDrop from '@components/ui/backDrop/BackDrop';
import RolRoute from './RolRoute';


const PrivateRoute = ({ path, component: Component, ...rest }) => {

  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, [path]);

  return (
    <React.Fragment>
      {!renderComponent ? (
        <BackDrop></BackDrop>
      ) : (
        <Route
          {...rest}
          render={(props) => (
              <>
                <RolRoute exact path={path} component={Component} />
              </>
            )
          }
        />
      )}
    </React.Fragment>
  );
};

export default PrivateRoute;
