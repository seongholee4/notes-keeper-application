## About
This is a full stack note taking app built using React and Node.js with Express and MongoDB as the backend.
It allows users to add, edit, delete and view notes. The app is built using React and uses the useState hook to manage state.

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
#### Install dependencies and start the client
```bash
cd client
npm install
npm start
```
#### The client runs on http://localhost:3000

## Features


