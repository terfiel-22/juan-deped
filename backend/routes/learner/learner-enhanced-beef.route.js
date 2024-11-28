import {
  fetchEnhancedBeef,
  saveEnhancedBeef,
} from "../../controllers/learner/learner-enhanced-beef.controller.js";
import { isLearner } from "../../middlewares/roleHandler.js";

export default (router) => {
  router.get("/learner/enhanced-beef", isLearner, fetchEnhancedBeef);
  router.post("/learner/enhanced-beef", isLearner, saveEnhancedBeef);
};
