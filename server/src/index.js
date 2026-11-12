import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
mongoose
  .connect(process.env.DB)
  .then(() => console.log("database connect successfully"))
  .catch(() => console.log("failed to connect"));

import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  login,
} from "./controller/auth.controller.js";

import express from "express";
import cors from "cors";
const app = express();
app.listen(process.env.PORT || 8080, () =>
  console.log(`running on port ${process.env.PORT}`),
);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.post("/user", createUser);
app.get("/user", getUser);
app.put("/user/:id", editUser);
app.delete("/user/:id", deleteUser);

app.post("/login", login);
