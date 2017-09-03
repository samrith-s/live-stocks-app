import _ from 'lodash';
import { createSelector } from 'reselect';

export const getData = state => {
  let data = state.app.data;
  let construedData = null;

  if(!_.isEmpty(data)) {
    construedData = Object.keys(data).map((item,index) => {
      let thisItem = data[item];
      return {
        name: item,
        ...thisItem
      }
    });

    return construedData;
  }
}

export const getMax = createSelector(
  getData,
  (data) => {
    let maxObj = _.orderBy(data, ['maxPrice'],['desc'])[0];
    return {
      name: maxObj.name,
      price: _.max(maxObj.history)
    }
  }
)

export const getMin = createSelector(
  getData,
  (data) => {
    let minObj = _.orderBy(data, ['minPrice']['asc'])[0];
    return {
      name: minObj.name,
      price: _.min(minObj.history)
    }
  }
)
