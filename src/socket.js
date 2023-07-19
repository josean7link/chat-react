import SocketIOClient from 'socket.io-client';

const url = 'http://127.0.0.1:3001';
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
    path: '/mobile',
    query: {
        token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJzdWIiOjIsImlhdCI6MTY4OTc4MTEwOCwiZXhwIjoxNjkwNjQ1MTA4fQ.YAvLfryXaFHTReDsvmUZUHgV9VMGLndDVUORGSueRS8`,
    },
});

export default socket;
