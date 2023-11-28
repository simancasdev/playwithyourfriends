import http from "http";
import cors from "cors";
import shortid from "shortid";
import express from "express";
import {Server} from "socket.io";
import {Answer, Challenge, DB, Player, Room} from "./interfaces";

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

    const newRoom: Room = {
      host,
      players: [],
      challenge: undefined,
      id: shortid.generate(),
    };
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

      // update database
      db.rooms[roomIndex]["players"].push(newPlayer);
      // notify users
      const payload = {room: db.rooms[roomIndex], player: newPlayer};
      socket.emit("@room-joined", payload);
      socket.broadcast.emit("@room-joined", payload);
    }
  });

  socket.on(
    "@send-challenge",
    (data: {challenge: Challenge; roomId: string}) => {
      const {roomId, challenge} = data;
      console.log("data", data);

      const roomIndex = db["rooms"].findIndex((room) => room["id"] === roomId);
      console.log("roomIndex", roomIndex);
      if (roomIndex !== -1) {
        // update database
        db.rooms[roomIndex]["challenge"] = challenge;
        socket.broadcast.emit(
          "@challenge-created",
          db.rooms[roomIndex]["challenge"]
        );
      }
    }
  );

  socket.on(
    "@send-answer",
    (data: {answer: Answer; player: Player; roomId: string}) => {
      const {answer, player} = data;
      console.log(answer);
      console.log(player);

      // const roomIndex = db["rooms"].findIndex((room) => room["id"] === roomId);
      // if (roomIndex !== -1) {
      //   // update database
      //   db.rooms[roomIndex]["challenge"] = challenge;
      //   socket.broadcast.emit(
      //     "@challenge-created",
      //     db.rooms[roomIndex]["challenge"]
      //   );
      // }
    }
  );
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
