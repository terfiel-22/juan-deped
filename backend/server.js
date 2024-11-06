import { config } from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import apiRoute from "./routes/api.route.js";
import errorHandler from "./middlewares/errorHandler.js";
import unsupportedRoutes from "./middlewares/unsupportedRoutes.js";

/** Initialization */
config();

/** Variables */
const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRoute());
app.use(unsupportedRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port http://localhost:${PORT}.`);
});
