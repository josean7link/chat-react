import SocketIOClient from 'socket.io-client';

// const url = 'http://127.0.0.1:3001';
// const url = 'http://127.0.0.1:3001/api/ws';
// const url = process.env.BACK_URL;
const url = 'https://api-dev.epxworldwide.com';

const socket = SocketIOClient(url, {
    reconnectionDelay: 500,
    reconnection: true,
    reconnectionAttemps: 2,
    agent: false,
    transports: ["websocket"],
    upgrade: false,
    rejectUnauthorized: false,
    path: '/mobile',
    query: {
        token: `Bearer ${process.env.TOKEN}`,
    },
});

export default socket;
