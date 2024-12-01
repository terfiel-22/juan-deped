import { config } from "dotenv";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import apiRoute from "./routes/api.route.js";
import errorHandler from "./middlewares/errorHandler.js";
// import unsupportedRoutes from "./middlewares/unsupportedRoutes.js";

/** Initialization */
config();

/** Variables */
const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoute());

// app.use(unsupportedRoutes); // For Development only

app.use(errorHandler); // This will catch an error provided by apiRoutes and will prevent reaching the front end side

/** Connect the Frontend */
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port http://localhost:${PORT}.`);
});
