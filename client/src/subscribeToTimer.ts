import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3003');

export { socket };
