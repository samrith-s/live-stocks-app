import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppWrapper from '../components/AppWrapper';
import Creators from './creators';

import { getData } from './selectors';

function mapStateToProps(state) {
  return {
    data: getData(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ...bindActionCreators(Creators, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
