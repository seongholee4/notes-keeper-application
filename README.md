## About
This is a full stack note taking app built using React and Node.js with Express and MongoDB as the backend.
It allows users to add, edit, delete and view notes. The app is built using React and uses the useState hook to manage state.

* **Server**: Node.js, Express, MongoDB, Mongoose, Cors
* **Client**: React, Axios

#### Vercel App Link for Frontend
- https://notes-keeper-application.vercel.app/

#### Railway App Link for Backend
- https://notes-keeper-application-production.up.railway.app/notes

## Setup and Configuration 

#### To install the app, clone the repository and run the following command in each of the server and client directories:
```bash
git clone https://github.com/seongholee4/notes-keeper-application.git
```
### Server
#### Create a .env file in the server directory and add your MongoDB URI
#### Replace <your_mongo_uri> with your MongoDB URI
```bash
cd server
echo MONGODB_URI=`<your_mongo_uri>` >> .env
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
#### Replace http://localhost:5000 with the server URL if it is different
```bash
cd client
echo "REACT_APP_API_URL=http://localhost:5000" >> .env
```

#### Install dependencies and start the client
```bash
npm install
npm start
```

#### The client runs on http://localhost:3000

## Features
1. Add a note
2. Delete a note
3. View all notes
4. Edit a note
5. A database to store notes (MongoDB)

## Reference Links

[Connecting Node.js App to MongoDB](https://www.youtube.com/watch?v=bhiEJW5poHU&t=674s)
- Referenced for MongoDB and Mongoose setup

[Creating an Express/Node + React Project | Node Backend + React Frontend](https://www.youtube.com/watch?v=w3vs4a03y3I&t=35s&ab_channel=ArpanNeupane)
- Referenced for Project structure and setup

[Full Stack Note Taking Application](https://www.youtube.com/watch?v=Wpdz5qbk79s&list=PLCKLPJHmXyU_VXHlXJNoiteyidITvZXMX&index=2&ab_channel=ShivamShekhar)
[GitHub Link: Full Stack Note Taking Application](https://github.com/shvam0000/Full-Stack-Note-Taking-Application/tree/main)
- Referenced for implementation on edit functionality and modification of css styling
- Referenced for mongoose schema construction for Object Mapping with MongoDB.
