import {
  addStudentForm,
  fetchStudentFormByAuthId,
} from "../controllers/student.controller.js";
import { isAuthenticated } from "../middlewares/roleHandler.js";
import { studentFormValidationRules } from "../validators/studentFormValidationRules.js";
import { validateForm } from "../validators/validateForm.js";

export default (router) => {
  router.get("/student/form/:authId", fetchStudentFormByAuthId);
  router.post(
    "/student/form",
    isAuthenticated,
    studentFormValidationRules,
    validateForm,
    addStudentForm
  );
};
