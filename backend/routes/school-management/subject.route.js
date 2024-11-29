import {
  fetchAppliedSubjects,
  fetchCoreSubjects,
  fetchSpecializedSubjects,
} from "../../controllers/school-management/subject.controller.js";

export default (router) => {
  router.get("/subject/core-subjects", fetchCoreSubjects);
  router.get("/subject/applied-subjects", fetchAppliedSubjects);
  router.get("/subject/specialized-subjects", fetchSpecializedSubjects);
};
