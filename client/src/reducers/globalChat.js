import { createReducer, createAction } from 'redux-starter-kit';
import socketConnection from '../socket';

export const actionSendMessage = createAction('SEND_MESSAGE');

const initialState = {
  board: [],
};

const globalChatReducer = createReducer(initialState, {
  [actionSendMessage]: (state, action) => {
    console.log(action);
    socketConnection.emit('SEND_MESSAGE', action.payload);
    state.board.push(action.payload);
    return state;
  },
});

export default globalChatReducer;
