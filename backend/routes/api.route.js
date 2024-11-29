import { Router } from "express";
import initRoute from "./init.route.js";
import authRoute from "./auth.route.js";
import studentRoute from "./student.route.js";
import schoolRoute from "./school-management/school.route.js";
import trackStrandSpecializationRoute from "./school-management/track-strand-specialization.route.js";
import learnerRoute from "./learner/learner.route.js";
import learnerEnhancedBeefRoute from "./learner/learner-enhanced-beef.route.js";
import personnelRoute from "./personnel/personnel.route.js";
import personnelInformationRoute from "./personnel/personnel-information.route.js";

const router = Router();

export default () => {
  initRoute(router);
  authRoute(router);
  studentRoute(router);
  trackStrandSpecializationRoute(router);
  schoolRoute(router);
  learnerRoute(router);
  learnerEnhancedBeefRoute(router);
  personnelRoute(router);
  personnelInformationRoute(router);
  return router;
};
