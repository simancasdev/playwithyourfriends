import http from "http";
import cors from "cors";
import express from "express";
import {Server} from "socket.io";

const PORT = process.env.PORT || 8090;
const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
