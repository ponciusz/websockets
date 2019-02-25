import io from 'socket.io-client';
import { uri, messageTypes } from '../constants/websockets';
// import { actionSendMessage, actionUserJoined } from '../reducers/globalChat';
const socket = io(uri);

export const init = store => {
  Object.keys(messageTypes).forEach(type =>
    socket.on(type, payload => store.dispatch({ type, payload }))
  );
};
export const emit = (type, payload) => socket.emit(type, payload);
