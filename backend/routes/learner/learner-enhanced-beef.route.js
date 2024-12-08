import {
  fetchOwnEnhancedBeef,
  saveEnhancedBeef,
} from "../../controllers/learner/learner-enhanced-beef.controller.js";
import { isLearner } from "../../middlewares/roleHandler.js";
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
};
