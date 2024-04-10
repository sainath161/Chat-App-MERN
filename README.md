# MERN Stack Project: Build and Deploy a Real Time Chat App | JWT, Socket.io

ChatApp is a full-stack web application that allows users to chat with each other in real-time. It provides a user-friendly interface for registration, login, and messaging. The application is built using React.js for the frontend and Node.js with Express.js for the backend. Real-time messaging is achieved using WebSocket protocol.
## Introduction 
This project is an example of how to build a real-time chat application using the MERN (MongoDB, Express.js, React, and Node.js) stack.

[Live App](https://chat-app-wp-ykcy.onrender.com/)

Some Features:

-   🌟 Tech stack: MERN + Socket.io + TailwindCSS + Daisy UI
-   🎃 Authentication && Authorization with JWT
-   👾 Real-time messaging with Socket.io
-   🚀 Online user status (Socket.io and React Context)
-   👌 Global state management with Zustand
-   🐞 Error handling both on the server and on the client
-   ⭐ At the end Deployment like a pro for FREE!
-   ⏳ Responsive Design: The application is designed to work seamlessly across different devices and screen sizes.
-   💯 Emoji Support: Users can express themselves using a wide range of emojis available in the chat.

# Technologies Used 🛠️
## Frontend Built Using:
-   [ReactJS](https://reactjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [DaisyUI](https://daisyui.com/) - A modern and lightweight CSS framework based on Tailwind CSS
-   [Zustand](https://github.com/pmndrs/zustand) - Lightweight and very simple react state manager

## Backend Built Using:
-   [NodeJS](http://nodejs.org/)
-   [Express](http://expressjs.com/)
-   [MongoDB](http://mongodb.com/) / [mongoose](http://mongoosejs.com/)
-   [socket.io](https://socket.io/)
-   [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication

## Tools & Utilities:
-   [Visual Studio Code](https://code.visualstudio.com/) - The text editor used
-   [GitHub](https://github.com/sainath161/ChatApp) - Where you'll find the code

#### Install dependencies for both frontend and backend
cd chatapp
`npm i`

cd chatapp/frontend
`npm i`

#### Configure environment variables:
Create a `.env` file at the root level of your project directory, then copy all the contents from the `.env.example` file to it.

```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

### Start the frontend and backend servers:
In one terminal tab (chatapp folder):
`npm run server`

In another terminal tab (chatapp/frontend folder):
`npm run dev`

Open `localhost:3000` in your browser to see the app