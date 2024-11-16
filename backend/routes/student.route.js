import { addStudentForm } from "../controllers/student.controller.js";

export default (router) => {
  router.post("/student/form", addStudentForm);
};
