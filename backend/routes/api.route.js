import { Router } from "express";
import initRoute from "./init.route.js";
import authRoute from "./auth.route.js";

const router = Router();

export default () => {
  initRoute(router);
  authRoute(router);
  return router;
};
