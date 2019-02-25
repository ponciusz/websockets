export const messageTypes = ['SEND_MESSAGE', 'USER_JOINED'].reduce(
  (accum, msg) => {
    accum[msg] = msg;
    return accum;
  },
  {}
);

export const uri = 'http://192.168.1.59:3003';
