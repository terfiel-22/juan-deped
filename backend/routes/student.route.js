import { addStudentForm } from "../controllers/student.controller.js";
import { isAuthenticated } from "../middlewares/roleHandler.js";

export default (router) => {
  router.post("/student/form", isAuthenticated, addStudentForm);
};
