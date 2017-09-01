import _ from 'lodash';
import { combineEpics } from 'redux-observable';

import * as AppEpics from './state/epics';

const Epics = combineEpics(
  ..._.values(AppEpics)
)

export default Epics;
