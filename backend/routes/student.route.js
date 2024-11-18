import { addStudentForm } from "../controllers/student.controller.js";
import { isAuthenticated } from "../middlewares/roleHandler.js";
import {
  studentFormValidationRules,
  validateStudentForm,
} from "../validators/validateStudentForm.js";

export default (router) => {
  router.post(
    "/student/form",
    isAuthenticated,
    studentFormValidationRules,
    validateStudentForm,
    addStudentForm
  );
};
