import io from 'socket.io-client';
import { uri, socketActionTypes } from '../constants/websockets';
// import { actionSendMessage, actionUserJoined } from '../reducers/globalChat';
const socket = io(uri);

export const init = store => {
  Object.keys(socketActionTypes).forEach(type =>
    socket.on(type, payload => store.dispatch({ type, payload }))
  );
};

// export const initRoom = (store, id) => {
//   Object.keys(socketActionTypes).forEach(type =>
//     socket.on(id + '@' + type, payload =>
//       store.dispatch({ type: id + '@' + type, payload })
//     )
//   );
// };

export const emit = (type, payload) => socket.emit(type, payload);
