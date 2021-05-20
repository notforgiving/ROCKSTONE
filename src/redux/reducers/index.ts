import { combineReducers } from "redux";
import messageReducer from './message';

const rootReducer = combineReducers({
  messages: messageReducer
});

export default rootReducer;
