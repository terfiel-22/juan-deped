import {
  createSchool,
  fetchSchool,
} from "../../controllers/school-management/school.controller.js";
import { isAuthenticated } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.get("/school", isAuthenticated, fetchSchool);
  router.post("/school", isAuthenticated, createSchool);
};
