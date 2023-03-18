import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from '@services/redux/history';
import { PAGES } from '@routes/constants';

import Layout from '@components/layout/Layout';
import PrivateRoute from './PrivateRoute';

import Home from '@containers/home/Home';
import DetailPodcast from '@containers/detailPodcast/DetailPodcast';
import NotFound from '@containers/notFound/NotFound';


export default function Routes() {

  return (
  <ConnectedRouter history={history}>
    <BrowserRouter>
    <Layout>
      <Switch>
        <PrivateRoute exact path={PAGES.HOME} component={Home} />
        <PrivateRoute exact path={PAGES.DETAIL} component={DetailPodcast} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
    </BrowserRouter>
  </ConnectedRouter>
  );
}