import { config } from "dotenv";
import express from "express";
import connectToMongoDB from "./db/connectToMongoDB.js";
import apiRoute from "./routes/api.route.js";

/** Initialization */
config();

/** Variables */
const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.use("/api", apiRoute());

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port http://localhost:${PORT}.`);
});
