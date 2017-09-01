import _ from 'lodash';

import Actions from './actions';

let defaultState = {
  data: {}
}

export default function Reducer(state = _.cloneDeep(defaultState), action) {
  let newState = _.cloneDeep(state);

  switch(action.type) {
    case Actions.CONSTRUE_DATA:
      return state;

    default:
      return state;
  }
}
