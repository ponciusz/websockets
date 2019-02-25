import io from 'socket.io-client';

const socketConnection = io('http://192.168.1.59:3003');
export default socketConnection;
