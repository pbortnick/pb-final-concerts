import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import concerts from './reducers/concerts';
import concertFormData from './reducers/concertFormData';
import venues from './reducers/venues';
import venue from './reducers/venue';


const reducers = combineReducers({
  concerts,
  concertFormData,
  venues,
  venue
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
