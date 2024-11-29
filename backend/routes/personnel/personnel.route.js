import {
  createPersonnel,
  loginPersonnel,
} from "../../controllers/personnel/personnel.controller.js";

export default (router) => {
  router.post("/auth/personnel/login", loginPersonnel);
  router.post("/personnel", createPersonnel);
};
