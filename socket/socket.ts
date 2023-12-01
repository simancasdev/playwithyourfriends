import http from "http";
import cors from "cors";
import shortid from "shortid";
import express from "express";
import {Server} from "socket.io";
import {ERROR_MESSAGE} from "./error";
import {Answer, AnswerHistory, Challenge, DB, Player, Room} from "./interfaces";

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
  const exitRoom = (message: string): void => {
    socket.broadcast.emit("@exit-room", message);
  };

  socket.on("@create-room", (data: {username: string}) => {
    const {username} = data;
    const host: Player = {
      username,
      id: shortid.generate(),
    };

    const newRoom: Room = {
      host,
      players: [],
      answerHistory: [],
      challenge: undefined,
      id: shortid.generate(),
    };
    // update database
    db.rooms.push(newRoom);
    // notify host
    socket.emit("@room-created", {room: newRoom, host});
  });

  socket.on("@join-room", (data: {roomId: string; username: string}) => {
    const {roomId, username} = data;
    const roomIndex = db["rooms"].findIndex((room) => room["id"] === roomId);
    if (roomIndex === -1) {
      exitRoom(ERROR_MESSAGE["ROOM_NOT_AVAILABLE"]);
      return;
    }
    const newPlayer: Player = {
      username,
      id: shortid.generate(),
    };
    // update database
    db.rooms[roomIndex]["players"].push(newPlayer);

    const payload = {room: db.rooms[roomIndex], player: newPlayer};
    socket.emit("@room-joined", {...payload, type: "me"});
    // notify players
    socket.broadcast.emit("@room-joined", {...payload, type: "others"});
  });

  socket.on(
    "@send-challenge",
    (data: {challenge: Challenge; roomId: string}) => {
      const {roomId, challenge} = data;
      const roomIndex = db["rooms"].findIndex((room) => room["id"] === roomId);
      if (roomIndex === -1) {
        exitRoom(ERROR_MESSAGE["SEND_CHALLENGE"]);
        return;
      }

      // update database
      db.rooms[roomIndex]["challenge"] = challenge;
      // notify players
      socket.broadcast.emit(
        "@challenge-created",
        db.rooms[roomIndex]["challenge"]
      );
    }
  );

  socket.on(
    "@send-answer",
    (data: {
      answer: Answer;
      player: Player;
      roomId: string;
      challengeId: string;
    }) => {
      const {answer, player, roomId, challengeId} = data;
      const roomIndex = db["rooms"].findIndex((room) => room["id"] === roomId);
      const newAnswerHistoryRecord = {player, answer};

      if (roomIndex === -1) {
        exitRoom(ERROR_MESSAGE["ROOM_NOT_AVAILABLE"]);
        return;
      }

      const challengeRecordIndex = db.rooms[roomIndex][
        "answerHistory"
      ].findIndex((record) => record["challengeId"] === challengeId);

      if (challengeRecordIndex !== -1) {
        db["rooms"][roomIndex]["answerHistory"][challengeRecordIndex][
          "records"
        ].push(newAnswerHistoryRecord);
      } else {
        db["rooms"][roomIndex]["answerHistory"].push({
          challengeId,
          records: [newAnswerHistoryRecord],
        });
      }

      const history = db["rooms"][roomIndex]["answerHistory"].find(
        (history) => history["challengeId"] === challengeId
      ) as AnswerHistory;

      const {records} = history;
      // We wait until all the players in the room send their
      // answers to notify the host
      if (records.length === db["rooms"][roomIndex]["players"].length) {
        socket.broadcast.emit("@challenge-completed", history);
      }
    }
  );
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
