import SocketIOClient from 'socket.io-client';

const url = 'https://b2trading.herokuapp.com';

const socket = SocketIOClient(url, {
    reconnectionDelay: 500,
    reconnection: true,
    reconnectionAttemps: 10,
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
}); 

export default socket;
