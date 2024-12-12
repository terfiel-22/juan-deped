import {
  createEnrollmentRequirement,
  deleteEnrollmentRequirement,
  editEnrollmentRequirement,
  fetchEnrollmentRequirements,
} from "../../controllers/enrollment-management/enrollment-requirements.controller.js";

import { isPersonnel } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.post(
    "/enrollment/requirement",
    isPersonnel,
    createEnrollmentRequirement
  );
  router.put("/enrollment/requirement", isPersonnel, editEnrollmentRequirement);
  router.delete(
    "/enrollment/requirement/:enrollmentRequirementId",
    isPersonnel,
    deleteEnrollmentRequirement
  );
  router.get("/enrollment/requirements", fetchEnrollmentRequirements);
};
