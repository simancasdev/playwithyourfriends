import http from "http";
import cors from "cors";
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
  socket.on(
    "@create-room",
    (data: {roomId: string; username: string; playerId: string}) => {
      const {roomId, username, playerId} = data;
      const host: Player = {
        username,
        id: playerId,
      };

      const newRoom: Room = {id: roomId, players: [], host};
      db.rooms.push(newRoom);

      socket.emit("@room-created", newRoom);
    }
  );

  socket.on("send-answer", (socket) => {
    console.log("YEAH!");
  });
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
