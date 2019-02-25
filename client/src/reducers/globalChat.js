import { createReducer } from 'redux-starter-kit';

const initialState = {
  board: [],
};

const globalChatReducer = createReducer(initialState, {
  SEND_MESSAGE: (state, action) => {
    console.log('actionSendMessage');

    state.board.push(action.payload);
    return state;
  },
});

export default globalChatReducer;
