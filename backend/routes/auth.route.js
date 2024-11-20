import {
  register,
  login,
  logout,
  fetchAuths,
  addAuth,
} from "../controllers/auth.controller.js";
import { isAdmin, isAuthenticated } from "../middlewares/roleHandler.js";

export default (router) => {
  router.get("/auths", isAuthenticated, isAdmin, fetchAuths);
  router.post("/auth/add", isAuthenticated, isAdmin, addAuth);
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.post("/auth/logout", logout);
};
