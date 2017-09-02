import _ from 'lodash';

import Actions from './actions';

let defaultState = {
  data: dataStore('get')
}

export default function Reducer(state = _.cloneDeep(defaultState), action) {
  let newState = _.cloneDeep(state);

  switch(action.type) {
    case Actions.MESSAGE_RECEIVED:
      newState.data = addDataToHash(newState.data, JSON.parse(action.message));
      dataStore('set',newState.data);
      return newState;

    default:
      return state;
  }
}

function addDataToHash(hash, data) {
  if(data && data.length > 0) {
    data.map(([name, price], index) => {
      let newHash = hash[name] || {};
      newHash.status = getStatus(newHash.price, price);
      newHash.diff = getDifference(newHash.price, price);
      newHash.oldPrice = newHash.price;
      newHash.price = price;
      newHash.updatedAt = Date.now();
      hash[name] = newHash;
      return true;
    });
  }

  return hash;
}

function getStatus(current,latest) {
  let status = 'default';

  if(current && current-latest > 0)
    status = 'up';
  else if(current && current-latest < 0)
    status = 'down';
  else if(current && current-latest===0)
    status = 'constant'

  return status;
}

function getDifference(current,latest) {
  return {
    percent: ((latest-current)/latest)*100,
    value: latest-current
  }
}

function dataStore(type, data) {
  data = data || {};
  switch(type) {
    case 'set':
      return window.localStorage.setItem('live-shares-data', JSON.stringify(data));

    case 'get':
      data = window.localStorage.getItem('live-shares-data');
      return data? JSON.parse(data) : {}

    default:
      return false;
  }
}
