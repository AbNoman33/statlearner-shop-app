import express from "express";
import colors from "colors";
import dotenv from "dotenv";

//environment variable
dotenv.config();
const PORT = process.env.SERVER_PORT || 7070;

//init express
const app = express();

//listen
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
