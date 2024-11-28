import { registerLearner } from "../../controllers/learner/learner.controller.js";

export default (router) => {
  router.post("/auth/learner/register", registerLearner);
};
