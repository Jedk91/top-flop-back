import express from "express";
import { User } from "./models/User";
import argon2 from "argon2";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API Top-Flop OK");
});

app.listen(3000, () => {
  console.log(`🚀 Server lancé sur http://localhost:3000 🚀`);
});
