import helmet from "helmet";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: [process.env.APP_URL],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  },
});

const allowedOrigins = [process.env.APP_URL, process.env.SERVICE_URL];

app.use((req, res, next) => {
  req.io = io;
  next();
});
app.use(helmet());
app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export { app, httpServer };
