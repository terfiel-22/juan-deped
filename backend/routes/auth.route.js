import {
  alumniLogin,
  alumniRegister,
  parentLogin,
  parentRegister,
  personnelLogin,
  personnelRegister,
  studentLogin,
  studentRegister,
} from "../controllers/auth.controller.js";

export default (router) => {
  router.post("/auth/login/student", studentLogin);
  router.post("/auth/login/alumni", alumniLogin);
  router.post("/auth/login/parent", parentLogin);
  router.post("/auth/login/personnel", personnelLogin);
  router.post("/auth/login/student", studentRegister);
  router.post("/auth/login/alumni", alumniRegister);
  router.post("/auth/login/parent", parentRegister);
  router.post("/auth/login/personnel", personnelRegister);
};
