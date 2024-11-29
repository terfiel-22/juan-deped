import {
  fetchAppliedSubjects,
  fetchCoreSubjects,
  fetchSpecializedSubjects,
} from "../../controllers/school-management/subject.controller.js";

export default (router) => {
  router.get("/subjects/core", fetchCoreSubjects);
  router.get("/subjects/applied", fetchAppliedSubjects);
  router.get("/subjects/specialized", fetchSpecializedSubjects);
};
