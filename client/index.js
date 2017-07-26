import io from 'socket.io-client';

// let socket = io('http://localhost:3000/socket.io/');
let socket = io();

socket.on('slack message', (data) => {
    document.body.innerHTML = `Slack Message ${data.date}`
})