import { createReducer } from 'redux-starter-kit';

const initialState = {
  online: [],
};

const onlineUsersReducer = createReducer(initialState, {
  LOGGED_IN: (state, action) => {
    return state;
  },
  LOGGED_OUT: (state, action) => {
    return state;
  },
});

export default onlineUsersReducer;
