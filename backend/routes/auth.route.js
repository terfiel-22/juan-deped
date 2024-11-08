import {
  adminLogin,
  alumniLogin,
  alumniRegister,
  logout,
  parentLogin,
  parentRegister,
  personnelLogin,
  personnelRegister,
  studentLogin,
  studentRegister,
} from "../controllers/auth.controller.js";

export default (router) => {
  router.post("/auth/login/admin", adminLogin);
  router.post("/auth/login/student", studentLogin);
  router.post("/auth/login/alumni", alumniLogin);
  router.post("/auth/login/parent", parentLogin);
  router.post("/auth/login/personnel", personnelLogin);
  router.post("/auth/register/student", studentRegister);
  router.post("/auth/register/alumni", alumniRegister);
  router.post("/auth/register/parent", parentRegister);
  router.post("/auth/register/personnel", personnelRegister);
  router.post("/auth/logout", logout);
};
