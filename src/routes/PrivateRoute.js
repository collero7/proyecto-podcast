import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePodcastDetailRequest as deletePodcastDetailRequestReducer } from '@store/reducers/podcastDetailReducer';
import BackDrop from '@components/ui/backDrop/BackDrop';
import RolRoute from './RolRoute';


const PrivateRoute = ({ path, component: Component, deletePodcastDetailRequest, ...rest }) => {

  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    // Siempre que se acceda a la vista de inicio, se elimina del storage de Redux el detalle del podcast almacenado
    if(path === '/') deletePodcastDetailRequest();
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

export default connect(
  () => ({}),
  (dispatch) => ({
    deletePodcastDetailRequest: (data) => dispatch(deletePodcastDetailRequestReducer(data))
  })
)(PrivateRoute);