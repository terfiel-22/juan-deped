import {
  createEnrollmentSchedule,
  deleteEnrollmentSchedule,
  editEnrollmentSchedule,
  fetchEnrollmentSchedules,
} from "../../controllers/enrollment-management/enrollment-schedule.controller.js";

export default (router) => {
  router.post("/enrollment/schedule", createEnrollmentSchedule);
  router.get("/enrollment/schedules", fetchEnrollmentSchedules);
  router.put("/enrollment/schedule", editEnrollmentSchedule);
  router.delete(
    "/enrollment/schedule/:enrollmentScheduleId",
    deleteEnrollmentSchedule
  );
};
