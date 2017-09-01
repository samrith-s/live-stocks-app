import 'rxjs';
import thunkMiddleware from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';

import SocketManager from './SocketManager';
import RootReducer from '../index.reducer';
import Epics from '../index.epics';

const dependencies = {
  Socket: new SocketManager()
}

let middleware = applyMiddleware(
  thunkMiddleware,
  createEpicMiddleware(
    Epics,
    { dependencies }
  )
)

let devtoolsExtensions = window['devToolsExtension'] && window['devToolsExtension']();
let Store = createStore(RootReducer, devtoolsExtensions, middleware);

export default Store;
