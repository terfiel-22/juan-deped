import {
  createEnrollmentSchedule,
  deleteEnrollmentSchedule,
  editEnrollmentSchedule,
  fetchEnrollmentSchedules,
} from "../../controllers/enrollment-management/enrollment-schedule.controller.js";
import { isPersonnel } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.post("/enrollment/schedule", isPersonnel, createEnrollmentSchedule);
  router.get("/enrollment/schedules", fetchEnrollmentSchedules);
  router.put("/enrollment/schedule", isPersonnel, editEnrollmentSchedule);
  router.delete(
    "/enrollment/schedule/:enrollmentScheduleId",
    isPersonnel,
    deleteEnrollmentSchedule
  );
};
