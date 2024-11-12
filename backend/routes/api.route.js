import { Router } from "express";
import initRoute from "./init.route.js";
import authRoute from "./auth.route.js";
import personnelRoute from "./personnel.route.js";
import studentRoute from "./student.route.js";
import trackStrandSpecializationRoute from "./track-strand-specialization.route.js";

const router = Router();

export default () => {
  initRoute(router);
  authRoute(router);
  personnelRoute(router);
  studentRoute(router);
  trackStrandSpecializationRoute(router);
  return router;
};
