import { combineReducers } from 'redux';
import onlineUsersReducer from './onlineUsers';
import globalChatReducer from './globalChat';
import openGamesReducer from './openGames';

const rootReducer = combineReducers({
  onlineUsersReducer,
  globalChatReducer,
  openGamesReducer,
});

export default rootReducer;
