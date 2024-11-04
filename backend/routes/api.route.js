import { Router } from "express";
import initRoute from "./init.route.js";

const router = Router();

export default () => {
  initRoute(router);
  return router;
};
