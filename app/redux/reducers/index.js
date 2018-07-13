import { combineReducers } from 'redux';
import * as splashReducer from './splash'

const appReducer = combineReducers(Object.assign(
  splashReducer,
));

export default appReducer
