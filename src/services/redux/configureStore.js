import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "./history";
import reducers from "./reducers/index";

export default function configureStore() {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  );
}
