import _ from 'lodash';

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
