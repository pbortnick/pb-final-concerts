import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import concerts from './reducers/concerts';
import venues from './reducers/venues';
import concertFormData from './reducers/concertFormData';

const reducers = combineReducers({
  concerts,
  venues,
  concertFormData
});

const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);;
