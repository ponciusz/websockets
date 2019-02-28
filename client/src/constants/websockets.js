export const socketActionTypes = [
  'ONLINE_USERS',
  'SEND_MESSAGE',
  'USER_JOINED',
  'USER_LEFT',
  'GAME_CREATED',
  'JOIN_ROOM',
].reduce((accum, type) => {
  accum[type] = type;
  return accum;
}, {});

export const uri = 'http://192.168.1.62:3003';
