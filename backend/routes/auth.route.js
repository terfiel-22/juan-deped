import {
  register,
  login,
  logout,
  fetchAuths,
} from "../controllers/auth.controller.js";

export default (router) => {
  router.get("/auths", fetchAuths);
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.post("/auth/logout", logout);
};
