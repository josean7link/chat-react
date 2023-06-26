import SocketIOClient from 'socket.io-client';

const url = 'http://127.0.0.1:3002';
// const url = 'http://127.0.0.1:3001/api/ws';
// const url = process.env.BACK_URL;
// const url = 'api-dev.epxworldwide.com';

const socket = SocketIOClient(url, {
    reconnectionDelay: 500,
    reconnection: true,
    reconnectionAttemps: 2,
    agent: false,
    transports: ["websocket"],
    upgrade: false,
    rejectUnauthorized: false,
    path: '/api',
    query: {
        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoicGx1c01lbWJlciIsInN1YiI6MzQwLCJpYXQiOjE2ODc1ODIwNTUsImV4cCI6MTY4ODQ0NjA1NX0.r4K3uCex5S5Lmg1CrVLuKP7-QGPos9wI8E6m8tMk9eo`,
    },
});

export default socket;
