import { config } from "dotenv";
import express from "express";
import connectToMongoDB from "./db/connectToMongoDB.js";

/** Initialization */
config();

/** Variables */
const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port http://localhost:${PORT}.`);
});
