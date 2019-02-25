import { createReducer } from 'redux-starter-kit';

const initialState = {
  open: {},
  inProgress: {},
};

const openGamesReducer = createReducer(initialState, {
  GAME_CREATED: (state, action) => {
    state.open = action.payload;
    return state;
  },
  GAME_FULL: (state, action) => {
    return state;
  },
});

export default openGamesReducer;
