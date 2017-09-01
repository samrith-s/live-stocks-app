import { combineReducers } from 'redux';

import Reducer from './state/reducer';

export default combineReducers({
  app: Reducer
});
