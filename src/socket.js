import SocketIOClient from 'socket.io-client';

const url = 'http://192.168.0.102:81';

const socket = SocketIOClient(url, {
    reconnectionDelay: 500,
    reconnection: true,
    reconnectionAttemps: 10,
    agent: false,
    upgrade: false,
    rejectUnauthorized: false,
    extraHeaders: {
        Authorization: `Bearer aqui va el token`,
    },
}); 

export default socket;
