import io from 'socket.io-client';

const socketConnection = io('localhost:3003');
export default socketConnection;
