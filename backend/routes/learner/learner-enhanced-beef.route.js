import {
  fetchEnhancedBeefById,
  fetchEnhancedBeefs,
  fetchOwnEnhancedBeef,
  saveEnhancedBeef,
  updateEnhancedBeefStatus,
} from "../../controllers/learner/learner-enhanced-beef.controller.js";
import {
  isAdmin,
  isLearner,
  isPersonnel,
} from "../../middlewares/roleHandler.js";
import { enhancedBeefValidationRules } from "../../validators/enhancedBeefValidationRules.js";
import { validateForm } from "../../validators/validateForm.js";

export default (router) => {
  router.get("/learner/enhanced-beef", isLearner, fetchOwnEnhancedBeef);
  router.post(
    "/learner/enhanced-beef",
    isLearner,
    enhancedBeefValidationRules,
    validateForm,
    saveEnhancedBeef
  );
  router.get(
    "/learner/enhanced-beefs",
    isPersonnel,
    isAdmin,
    fetchEnhancedBeefs
  );
  router.get(
    "/learner/enhanced-beef/:learnerId",
    isPersonnel,
    isAdmin,
    fetchEnhancedBeefById
  );
  router.put(
    "/learner/enhanced-beef/:learnerId",
    isPersonnel,
    isAdmin,
    updateEnhancedBeefStatus
  );
};
