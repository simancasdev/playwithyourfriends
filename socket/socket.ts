import http from "http";
import cors from "cors";
import shortid from "shortid";
import express from "express";
import {Server} from "socket.io";
import {DB, Player, Room} from "./interfaces";

const PORT = process.env.PORT || 8090;
const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const db: DB = {
  rooms: [],
};

io.on("connection", (socket) => {
  socket.on("@create-room", (data: {username: string}) => {
    const {username} = data;
    const host: Player = {
      username,
      id: shortid.generate(),
    };

    const newRoom: Room = {id: shortid.generate(), players: [], host};
    db.rooms.push(newRoom);

    socket.emit("@room-created", newRoom);
  });

  socket.on("@join-room", (data: {roomId: string; username: string}) => {
    const {roomId, username} = data;
    const roomIndex = db["rooms"].findIndex((room) => room["id"] === roomId);
    if (roomIndex !== -1) {
      const newPlayer: Player = {
        username,
        id: shortid.generate(),
      };
      db.rooms[roomIndex]["players"].push(newPlayer);
      socket.emit("@room-joined", db.rooms[roomIndex]);
    }
  });

  // socket.on("send-answer", (socket) => {
  //   console.log("YEAH!");
  // });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
