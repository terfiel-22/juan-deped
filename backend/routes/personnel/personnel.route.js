import { createPersonnel } from "../../controllers/personnel/personnel.controller.js";

export default (router) => {
  router.post("/personnel", createPersonnel);
};
