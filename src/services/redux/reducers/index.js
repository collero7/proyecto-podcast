import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../history';
import podcastsReducer from './podcastsReducer';

export default combineReducers({
  router: connectRouter(history),
  podcasts: podcastsReducer
});
