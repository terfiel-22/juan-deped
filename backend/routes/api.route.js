import { Router } from "express";
import initRoute from "./init.route.js";
import authRoute from "./auth.route.js";
import personnelRoute from "./personnel.route.js";
import studentRoute from "./student.route.js";
import schoolRoute from "./school-management/school.route.js";
import trackStrandSpecializationRoute from "./school-management/track-strand-specialization.route.js";

const router = Router();

export default () => {
  initRoute(router);
  authRoute(router);
  personnelRoute(router);
  studentRoute(router);
  trackStrandSpecializationRoute(router);
  schoolRoute(router);
  return router;
};
