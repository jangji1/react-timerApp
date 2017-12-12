import { combineReducers } from 'redux';
import counter from './counter';
import ui from './ui';

export default const reducers = combineReducers({
  counter, ui
});