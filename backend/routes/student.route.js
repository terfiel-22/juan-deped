import {
  addStudentForm,
  fetchStudentFormByAuthId,
} from "../controllers/student.controller.js";
import { isAuthenticated } from "../middlewares/roleHandler.js";
import {
  studentFormValidationRules,
  validateStudentForm,
} from "../validators/validateStudentForm.js";

export default (router) => {
  router.get("/student/form/:authId", fetchStudentFormByAuthId);
  router.post(
    "/student/form",
    isAuthenticated,
    studentFormValidationRules,
    validateStudentForm,
    addStudentForm
  );
};
