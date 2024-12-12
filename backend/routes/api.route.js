import { Router } from "express";
import initRoute from "./init.route.js";
import schoolRoute from "./school-management/school.route.js";
import trackStrandSpecializationRoute from "./school-management/track-strand-specialization.route.js";
import learnerRoute from "./learner/learner.route.js";
import learnerEnhancedBeefRoute from "./learner/learner-enhanced-beef.route.js";
import personnelRoute from "./personnel/personnel.route.js";
import personnelInformationRoute from "./personnel/personnel-information.route.js";
import subjectRoute from "./school-management/subject.route.js";
import enrollmentScheduleRoute from "./enrollment-management/enrollment-schedule.route.js";
import enrollmentRequirementsRoute from "./enrollment-management/enrollment-requirements.route.js";

const router = Router();

export default () => {
  initRoute(router);
  trackStrandSpecializationRoute(router);
  schoolRoute(router);
  learnerRoute(router);
  learnerEnhancedBeefRoute(router);
  personnelRoute(router);
  personnelInformationRoute(router);
  subjectRoute(router);
  enrollmentScheduleRoute(router);
  enrollmentRequirementsRoute(router);
  return router;
};
