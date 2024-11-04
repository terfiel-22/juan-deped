import { config } from "dotenv";
import express from "express";

/** Initialization */
config();

/** Variables */
const app = express();
const PORT = process.env.PORT || 5000;

/** Middlewares */
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}.`);
});
