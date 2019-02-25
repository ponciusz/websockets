import { combineReducers } from 'redux';
import onlineUsersReducer from './onlineUsers';
import globalChatReducer from './globalChat';

const rootReducer = combineReducers({
  onlineUsersReducer,
  globalChatReducer,
});

export default rootReducer;
