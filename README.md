## About
This is a full stack note taking app built using React and Node.js with Express and MongoDB as the backend.
It allows users to add, edit, delete and view notes. The app is built using React and uses the useState hook to manage state.

Server: Node.js, Express, MongoDB, Mongoose, Cors
Client: React, Axios

## Installation and Setup
#### To install the app, clone the repository and run the following command in each of the server and client directories:
```bash
git clone https://github.com/seongholee4/notes-keeper-application.git
```
### Server
#### Create a .env file in the server directory and add your MongoDB URI
```bash
cd server
touch .env
echo "MONGODB_URI=<your_mongo_uri>" >> .env
```
#### Install dependencies and start the server
```bash
npm install
npm run dev or npm start
```
#### The server runs on http://localhost:5000

---

### Client
#### Create a .env file in the client directory and add the following line
```bash
cd client
touch .env
echo "REACT_APP_API_URL=http://localhost:5000" >> .env
```

#### Install dependencies and start the client
```bash
npm install
npm start
```
#### The client runs on http://localhost:3000

## Features


