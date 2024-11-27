import { createSchool } from "../../controllers/school-management/school.controller.js";
import { isAuthenticated } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.post("/school", isAuthenticated, createSchool);
};
