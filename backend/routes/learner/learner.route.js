import {
  loginLearner,
  logout,
  registerLearner,
} from "../../controllers/learner/learner.controller.js";

export default (router) => {
  router.post("/auth/learner/register", registerLearner);
  router.post("/auth/learner/login", loginLearner);
  router.post("/auth/logout", logout);
};
