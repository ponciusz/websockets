import { createReducer, createAction } from 'redux-starter-kit';

import { emit } from '../actions/websockets';

export const actionSendMessage = createAction('SEND_MESSAGE');
export const actionUserJoined = createAction('USER_JOINED');

const initialState = {
  board: [],
};

const globalChatReducer = createReducer(initialState, {
  [actionSendMessage]: (state, action) => {
    console.log('actionSendMessage');

    state.board.push(action.payload);
    return state;
  },
  [actionUserJoined]: (state, action) => {
    console.log('actionUserJoined');

    // state.board.push(action.payload);
    return state;
  },
});

export default globalChatReducer;
