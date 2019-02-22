import { combineReducers } from 'redux';
import onlineUsersReducer from './onlineUsers';

const rootReducer = combineReducers({
  onlineUsersReducer,
});

export default rootReducer;
