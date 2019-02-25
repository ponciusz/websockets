import { createReducer } from 'redux-starter-kit';

const initialState = {
  online: {},
};

const onlineUsersReducer = createReducer(initialState, {
  USER_JOINED: (state, action) => {
    const user = action.payload;
    console.log('actionUserJoined', user);
    state.online[user.id] = {
      name: user.name,
    };
    return state;
  },
  USER_LEFT: (state, action) => {
    const userID = action.payload;
    console.log('actionUserLeft', userID);
    delete state.online[userID];
    return state;
  },
  ONLINE_USERS: (state, action) => {
    console.log('ONLINE_USERS', action.payload);
    state.online = action.payload;

    return state;
  },
});

export default onlineUsersReducer;
