import {
  saveSchoolData,
  fetchSchool,
} from "../../controllers/school-management/school.controller.js";
import { isPersonnel } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.get("/school", isPersonnel, fetchSchool);
  router.post("/school", isPersonnel, saveSchoolData);
};
