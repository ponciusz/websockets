import openSocket from 'socket.io-client';

const socket = openSocket('http://192.168.1.64:3003');

function subscribeSocket() {
  socket;
}

export { socket };
