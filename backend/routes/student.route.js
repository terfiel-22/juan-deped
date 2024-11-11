import { studentRegistration } from "../controllers/student.controller.js";

export default (router) => {
  router.post("/students", studentRegistration);
};
