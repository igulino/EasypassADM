import { io } from "socket.io-client";
const token = localStorage.getItem('token')
console.log(token);


export const socket = io("https://easypass-iak1.onrender.com", {
    autoConnect: false,
    auth: {
        token: localStorage.getItem('token')
    },
    withCredentials: true,
});

console.log(socket);
