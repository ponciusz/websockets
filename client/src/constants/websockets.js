export const socketActionTypes = [
  'ONLINE_USERS',
  'SEND_MESSAGE',
  'USER_JOINED',
  'USER_LEFT',
  'GAME_CREATED',
].reduce((accum, type) => {
  accum[type] = type;
  return accum;
}, {});

export const uri = 'http://192.168.1.59:3003';
